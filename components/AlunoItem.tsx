"use client";

import { deleteAluno } from "@/app/alunos/action";
import { Trash, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Props {
    id: number;
    nome: string;
}



export default function AlunoItem({ nome, id }: Props) {

    const router = useRouter();

    function handleDelete() {
        deleteAluno(id);
        router.refresh();
    }
    return (
        <li className="flex gap-1">
            <Link href={`/aluno/${id}`}>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition">
                    <User size={20} className="text-green-300" />
                    <span className="text-green-500">{nome}</span>
                </div>
            </Link>
            <button className="text-red-500" onClick={handleDelete}>
                <Trash />
            </button>
        </li>
    );
}