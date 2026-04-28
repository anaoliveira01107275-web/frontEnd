import AlunoItem from "@/components/AlunoItem";
import { getAlunos } from "./action";
import  Link  from "next/link";

export default async function AlunosPage() {
    const alunos = await getAlunos();

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 p-8">
             
                <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
                    Lista de Alunos
                </h1>

                <div className="bg-white rounded-2xl shadow-lg p-6 w-full overflow-auto">
                    <ul className="space-y-3">
                        {alunos.map((aluno) => (
                            <AlunoItem key={aluno.id} nome={aluno.nome} id={aluno.id} />
                        ))}
                        
                    
                    </ul>
                </div>

                <Link href="/aluno/cadastro" className="px-5 py-2 bg-white text-black mt-10 rounded-lg">

                Cadastrar aluno

                </Link>

        </div>
    );
}





// a div maior tem que o cupar toda a largura e toda a altura da tela
//centralizar tudo na horizontal
//título deve ser grande e em negrito e na parte superior da tela
//a div menor deve ser branca, com bordas arredondadas e uma sombra leve
//tudo deve ter um espeçamento interno