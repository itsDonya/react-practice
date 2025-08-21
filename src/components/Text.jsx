import React, { useContext } from "react";
import { ProfileContext } from "../pages/Home";
import Input from "./Input";

const Text = () => {
  const { name } = useContext(ProfileContext);

  return (
    <>
      <p className="text-xl">
        Good Evening {name}! You can change your pretty name enytime :)
      </p>

      <Input />
    </>
  );
};

export default Text;
