"use client";

import { useState, SubmitEvent } from "react";
import { createAluno } from "./action";
import { useRouter } from "next/navigation";

export default function AlunoCadastroPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const response = await createAluno({
        nome,
        idade: Number(idade),
        cpf: Number(cpf),
        email,
    });

    if (!response) {
        setNome("");
        setIdade("");
        setCpf("");
        setEmail("");
        router.push("/alunos");
        return;
    }

    alert (response);
  }

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Cadastro de Aluno
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
