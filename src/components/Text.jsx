import React, { useReducer } from "react";
import Input from "./Input";
import { initialState, profileReducer } from "../stores/profileReducer";

const Text = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <>
      <p className="text-xl">
        Good Evening {state.name}! You can change your pretty name enytime :)
      </p>

      <Input />
    </>
  );
};

export default Text;
