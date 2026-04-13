export default function LoginPage() {
  return (
    <div className="w-screen min-h-screen max-h-screen flex flex-col items-center bg-blue-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center w-full text-blue-500">Login</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded placeholder-blue-200 text-blue-300"
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-2 border rounded placeholder-blue-200 text-blue-300"
          />

          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}