import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
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

        <button className="w-20 mt-5 transition ease-in-out duration-200 text-white p-1 rounded-md hover:bg-blue-700 bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
