"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getAluno, updateAluno } from "../actions";
import { useRouter } from "next/navigation";

export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);
    const router = useRouter();


    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    function handleChange(value: string|number, key: keyof Aluno) {
        setAluno(oldState => ({ ...oldState, [key]: value }));
    }

    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateAluno(Number(id), aluno);

        if (response) {
            alert(response);
            return;
        }

        router.push(`/aluno/${id}`);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
            <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6" onSubmit={handleUpdate}>
                
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
                            onChange={(e) => handleChange(Number(e.target.value), "cpf")}
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

                        <div className="flex flex-col">
                        <label className="text-sm text-zinc-600 mb-1">Idade</label>
                        <input
                            className="border border-zinc-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={aluno.idade || ""}
                            onChange={(e) => handleChange(Number(e.target.value), "idade")}
                        />
                    </div>

                </div>

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                >
                    Salvar
                </button>

            </form>
        </div>
        
    );
}
