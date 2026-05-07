import CursoItem from "@/components/CursoItem";
import { getCursos } from "./action";
import Link from "next/link";
import { Curso } from "@/interfaces/cursos";

export default async function CursoPage() {
    const cursos = await getCursos();

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-50 to-gray-100 p-6">
            
           
            <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-blue-700 tracking-tight">
                Lista de Cursos
            </h1>

          
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-2xl">
                
                <ul className="flex flex-col gap-6">
                    {cursos.map((curso) => (
                        <CursoItem key={curso.professor} nome={curso.curso} id={curso.cargaHoraria} />
                    ))}
                </ul>

            </div>

           
            <Link 
                href="/curso/cadastro" 
                className="mt-10 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200"
            >
                + Cadastrar curso
            </Link>

        </div>
    );
}