import React, { useReducer, useRef } from "react";
import { initialState, profileReducer } from "../stores/profileReducer";

const Input = () => {
  //   const inputRef = useRef();

  const [state, dispatch] = useReducer(profileReducer, initialState);

  //   const handleClick = () => {
  //     dispatch({ type: "submit_name", payload: inputRef.current.value });
  //   };

  //   return (
  // <div className="w-64 m-auto flex flex-col items-center justify-center gap-1">
  //   <input
  //     type="text"
  //     ref={inputRef}
  //     defaultValue={state.name}
  //     placeholder="Enter anything you want, sweetheart"
  //     className="w-full h-10 !px-2 border border-black rounded-lg"
  //   />

  //   <button
  //     onClick={handleClick}
  //     className="w-full h-10 text-white bg-black rounded-lg cursor-pointer">
  //     Submit
  //   </button>
  // </div>
  //   );
};

export default Input;
