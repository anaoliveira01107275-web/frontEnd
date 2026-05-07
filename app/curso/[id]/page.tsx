"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import  {getCurso}  from "./action";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);

    useEffect(() => {
    if (!id) return;

    const cursoId = Array.isArray(id) ? id[0] : id;

    getCurso(Number(cursoId))
        .then(setCurso)
        .catch((err) => {
            console.error("Erro ao buscar curso:", err);
        });
}, [id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                
                <div className="flex gap-2 items-center justify-between">
                    <h1 className="text-2xl font-bold text-center text-zinc-800 mb-6">
                        {curso.curso}
                    </h1>

                    <Link href={`/curso/${id}/editar`}>
                        <PenBox />
                    </Link>
                </div>

                <div className="space-y-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="text-sm text-zinc-500">Nome</p>
                        <p className="text-lg font-semibold text-zinc-800">
                            {curso.curso || "Carregando..."}
                        </p>
                    </div>

                    <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="text-sm text-zinc-500">Descrição</p>
                        <p className="text-lg font-semibold text-zinc-800">
                            {curso.descricao || "Carregando..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}