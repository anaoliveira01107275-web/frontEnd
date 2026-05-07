"use client";

import { useState, FormEvent } from "react";
import { createCurso } from "./action";
import { useRouter } from "next/navigation";

export default function CursoCadastroPage() {
  const router = useRouter();

  const [curso, setCurso] = useState("");
  const [professor, setProfessor] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await createCurso({
      nome:curso,
      professor,
      cargaHoraria: Number(cargaHoraria),
      descricao
    });

    if (response) {
      alert(response);
      return;
    }

    setCurso("");
    setProfessor("");
    setCargaHoraria("");
    setDescricao("");

    router.push("/cursos");
  }

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Cadastro de Curso
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>


          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nome do Curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />

         
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Carga Horária"
            value={cargaHoraria}
            onChange={(e) => setCargaHoraria(e.target.value)}
          />

     
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nome do Professor"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            type="submit"
          >
            Cadastrar
          </button>

        </form>
      </div>
    </div>
  );
}