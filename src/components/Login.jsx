import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">Login Form</h1>

      <input
        type="text"
        placeholder="Username"
        className="w-40 h-10 mt-2 !px-2 border border-neutral-400 rounded-md"
      />

      <div className="flex items-center justify-center gap-2">
        <button className="w-19 h-10 border border-neutral-400 rounded-md hover:bg-neutral-200/40 cursor-pointer transition-all duration-300">
          Login
        </button>

        <button className="w-19 h-10 border border-neutral-400 rounded-md hover:bg-neutral-200/40 cursor-pointer transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
