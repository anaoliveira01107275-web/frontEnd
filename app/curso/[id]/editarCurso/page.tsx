"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { updateCurso } from "../../cadastro/action";

type CursoAPI = {
  id: number;
  nome: string;
  professor: string;
  descricao: string;
  cargaHoraria: number;
};

type CursoPayload = {
  id: number;
  nome: string;
  professor: string;
  descricao: string;
  cargaHoraria: number;
};

export default function CursoPage() {
  const params = useParams();
  const router = useRouter();

  const idParam =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : undefined;

  const [curso, setCurso] = useState<Partial<Curso>>({
    curso: "",
    professor: "",
    cargaHoraria: 0,
    descricao: "",
  });

  function toFrontend(data: CursoAPI): Partial<Curso> {
    return {
      curso: data.nome ?? "",
      professor: data.professor ?? "",
      cargaHoraria: data.cargaHoraria ?? 0,
      descricao: data.descricao ?? "",
    };
  }

  function toBackend(): CursoPayload {
    return {
      id: Number(idParam),
      nome: curso.curso ?? "",
      professor: curso.professor ?? "",
      descricao: curso.descricao ?? "",
      cargaHoraria: Number(curso.cargaHoraria ?? 0),
    };
  }

  useEffect(() => {
    if (!idParam) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/curso/${idParam}`);

        const data: CursoAPI = await res.json(); // ✅ sem any

        setCurso(toFrontend(data));
      } catch (err) {
        console.error("Erro ao buscar curso:", err);
      }
    };

    fetchData();
  }, [idParam]);

  function handleChange<K extends keyof Curso>(
    value: Curso[K],
    key: K
  ) {
    setCurso((old) => ({
      ...old,
      [key]: value,
    }));
  }

  async function handleUpdate(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!idParam) return;

    const payload = toBackend();

    await updateCurso(Number(idParam), payload);

    router.push(`/curso/${idParam}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
      <form
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
        onSubmit={handleUpdate}
      >
        <h1 className="text-2xl font-bold text-center text-zinc-800">
          Editar Curso
        </h1>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <label className="text-sm text-zinc-600 mb-1">
              Nome
            </label>
            <input
              className="border border-zinc-300 rounded-lg px-3 py-2"
              value={curso.curso ?? ""}
              onChange={(e) =>
                handleChange(e.target.value, "curso")
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-zinc-600 mb-1">
              Professor
            </label>
            <input
              className="border border-zinc-300 rounded-lg px-3 py-2"
              value={curso.professor ?? ""}
              onChange={(e) =>
                handleChange(e.target.value, "professor")
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-zinc-600 mb-1">
              Descrição
            </label>
            <textarea
              className="border border-zinc-300 rounded-lg px-3 py-2"
              value={curso.descricao ?? ""}
              onChange={(e) =>
                handleChange(e.target.value, "descricao")
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-zinc-600 mb-1">
              Carga horária
            </label>
            <input
              type="number"
              className="border border-zinc-300 rounded-lg px-3 py-2"
              value={curso.cargaHoraria ?? ""}
              onChange={(e) =>
                handleChange(Number(e.target.value), "cargaHoraria")
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}