import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    setPassword("");
  };

  return (
    <div className="h-screen py-[80px] bg-gray-100">
      <form
        className="grid bg-white max-w-[400px] p-5 rounded mx-auto"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-lg mb-2">Sign up</h3>
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
          className="w-20 mt-5 bg-blue-500 transition ease-in-out duration-200 text-white p-1 rounded-md hover:bg-blue-700"
        >
          Sign up
        </button>
        {error && (
          <div className="text-md border-2 bg-red-100 border-red-400 text-red-500 px-3 py-2 mt-5 animate-bounce">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
