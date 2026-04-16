"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
    onSend: (email: string, password: string) => Promise<void | string>;
}

export default function LoginForm({onSend}: Props) {
  const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");


    async function handleSubmit() {
      const response = await onSend(email, password);

      if (response) {
        alert(response);
        return;
      }

      router.push("/");
    }

    

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded placeholder-blue-200 text-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-2 border rounded placeholder-blue-200 text-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />

          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer hover: opacity-80 "
          onClick={handleSubmit}>
            Entrar
          </button>
        </div>
      </div>
    )
}