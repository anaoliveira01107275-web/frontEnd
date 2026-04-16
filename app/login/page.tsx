import LoginForm from "@/components/LoginForm";

import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="w-screen min-h-screen max-h-screen flex flex-col items-center bg-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center w-full text-black">Login</h1>

      <LoginForm onSend={ loginAction}/>
    </div>
  );
}