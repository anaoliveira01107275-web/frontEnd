"use client";

import { deleteCursos } from "@/app/cursos/action";
import { Trash, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    nome: string;
}

export default function CursoItem({ nome, id }: Props) {
    const router = useRouter();

    function handleDelete() {
        deleteCursos(id);
        router.refresh();
    }

    return (
        <li className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-center justify-between">
            
         
            <Link href={`/curso/${id}`} className="flex items-center gap-3 flex-1">
                <User size={20} className="text-green-500" />
                <span className="text-gray-800 font-medium text-lg">
                    {nome}
                </span>
            </Link>

            <button 
                onClick={handleDelete}
                className="ml-4 text-red-500 hover:text-red-700 transition"
            >
                <Trash size={20} />
            </button>

        </li>
    );
}