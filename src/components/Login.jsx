import React, { useState } from "react";
import { login, logout } from "../stores/store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUsername, setNewUsername] = useState();

  const dispatch = useDispatch();
  const { username, isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">{`${
        username ? `Welcome, ${username}!` : "Login Form"
      }`}</h1>

      {!isLoggedIn && (
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setNewUsername(event.target.value)}
          className="w-40 h-10 !px-2 border border-neutral-400 rounded-md"
        />
      )}

      <div className="flex items-center justify-center gap-2">
        {!isLoggedIn && (
          <button
            onClick={() => dispatch(login({ username: newUsername }))}
            className="w-19 h-10 border border-neutral-400 rounded-md hover:bg-neutral-200/40 cursor-pointer transition-all duration-300">
            Login
          </button>
        )}

        <button
          onClick={() => dispatch(logout())}
          className="w-19 h-10 border border-neutral-400 rounded-md hover:bg-neutral-200/40 cursor-pointer transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
