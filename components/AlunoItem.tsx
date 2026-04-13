import { User } from "lucide-react";
import  Link  from "next/link";

interface Props {
    id: number;
    nome: string;
}



export default function AlunoItem({ nome, id }: Props){
    return (
        <Link href={`/aluno/${id}`}>
            <li className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:scale-[1.01] transition">
                            <User size={20} className="text-green-300" />
                            <span className="text-green-500">{nome}</span>
                        </li>
        </Link>
    );
}