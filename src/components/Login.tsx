import React, { useState } from "react";
import { login, logout, type UserState } from "../stores/login.store";
import { useDispatch, useSelector } from "react-redux";

const Login: React.FC = () => {
  const [newUsername, setNewUsername] = useState<string>("");
  const dispatch = useDispatch();
  const { isLoggedIn, username } = useSelector(
    (state: { user: UserState }) => state.user
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">
        {isLoggedIn ? `Welcome, ${username}!` : "Login Form"}
      </h1>

      {!isLoggedIn && (
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setNewUsername(event.target.value)}
          className="w-40 h-10 mt-2 !px-2 border border-neutral-400 rounded-md"
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

        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className="w-19 h-10 border border-neutral-400 rounded-md hover:bg-neutral-200/40 cursor-pointer transition-all duration-300">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
