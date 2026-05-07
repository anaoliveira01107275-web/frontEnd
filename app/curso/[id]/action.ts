"use server";

import { Curso } from "@/interfaces/cursos";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function getCurso(id: number) {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/cursos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["pegarCursos"] },
    });

    if (response.status === 401) {
      redirect("/login");
    }

    const data = await response.json();

    return data as Curso;
  } catch (e) {
    console.error(e);
    return {} as Curso;
  }
}

export async function updateCurso(id: number, curso: Curso) {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/cursos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curso),
    });

    if (response.status === 401) {
      redirect("/login");
    }

    if (response.status === 200) {
      revalidateTag("pegarCursos", "max");
      return;
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return "Erro ao atualizar o curso";
  }
}