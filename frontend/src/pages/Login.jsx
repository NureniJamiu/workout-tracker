import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="h-screen py-[80px] bg-gray-100">
      <form
        className="grid bg-white max-w-[400px] p-5 rounded mx-auto"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-lg mb-2">Login</h3>
        <label className="mb-1">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border-2 border-gray-100 rounded px-3 py-1 focus:border-black focus:outline-none"
        />
        <label className="mt-2 mb-1">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border-2 border-gray-100 rounded px-3 py-1 focus:border-black focus:outline-none"
        />

        <button
          disabled={isLoading}
          className="w-20 mt-5 transition ease-in-out duration-200 text-white p-1 rounded-md hover:bg-blue-700 bg-blue-500"
        >
          Login
        </button>
        {error && (
          <div className="text-md border-2 border-red-400 text-red-500 px-3 py-2 mt-5 animate-bounce">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
