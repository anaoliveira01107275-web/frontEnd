"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";
import  { PenBox } from "lucide-react";
import Link from "next/link";

export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <div className="flex gap-2">
                <h1 className="text-2xl font-bold text-center text-zinc-800 mb-6">
                    {aluno.nome}
                </h1>

                <Link href={`/aluno/${id}/editar`}>
                    <PenBox/>

                </Link>
            </div>

                <div className="space-y-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="text-sm text-zinc-500">Nome</p>
                        <p className="text-lg font-semibold text-zinc-800">
                            {aluno.nome || "Carregando..."}
                        </p>
                    </div>

                    <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="text-sm text-zinc-500">Email</p>
                        <p className="text-lg font-semibold text-zinc-800">
                            {aluno.email || "Carregando..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
