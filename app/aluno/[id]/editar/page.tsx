"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "../actions";

export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    function handleChange(value: string, key: keyof Aluno) {
        setAluno(oldState => ({ ...oldState, [key]: value }));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6">
                
                <h1 className="text-2xl font-bold text-center text-zinc-800">
                    Editar Aluno
                </h1>

                <div className="flex flex-col gap-4">
                    
                    <div className="flex flex-col">
                        <label className="text-sm text-zinc-600 mb-1">Nome</label>
                        <input
                            className="border border-zinc-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={aluno.nome || ""}
                            onChange={(e) => handleChange(e.target.value, "nome")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-zinc-600 mb-1">CPF</label>
                        <input
                            className="border border-zinc-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={aluno.cpf || ""}
                            onChange={(e) => handleChange(e.target.value, "cpf")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-zinc-600 mb-1">Email</label>
                        <input
                            className="border border-zinc-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={aluno.email || ""}
                            onChange={(e) => handleChange(e.target.value, "email")}
                        />
                    </div>

                </div>

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                >
                    Salvar
                </button>

            </div>
        </div>
    );
}
