import React, { useContext, useRef } from "react";
import { ProfileContext } from "../pages/Home";

const Input = () => {
  const inputRef = useRef();

  const { name, setName } = useContext(ProfileContext);

  const handleClick = () => {
    setName(inputRef.current.value);
  };

  return (
    <div className="w-64 m-auto flex flex-col items-center justify-center gap-1">
      <input
        type="text"
        ref={inputRef}
        defaultValue={name}
        placeholder="Enter anything you want, sweetheart"
        className="w-full h-10 !px-2 border border-black rounded-lg"
      />

      <button
        onClick={handleClick}
        className="w-full h-10 text-white bg-black rounded-lg cursor-pointer">
        Submit
      </button>
    </div>
  );
};

export default Input;
