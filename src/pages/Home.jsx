import React, { useReducer, useRef } from "react";

// import Text from "../components/Text";
import { initialState, profileReducer } from "../stores/profileReducer";

const Home = () => {
  const inputRef = useRef();

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleClick = () => {
    dispatch({ type: "submit_name", payload: inputRef.current.value });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">
          Hello, <span className="font-bold">{state.name}</span>!
        </h1>

        {/* <Text /> */}

        <div className="w-64 m-auto flex flex-col items-center justify-center gap-1">
          <input
            type="text"
            ref={inputRef}
            defaultValue={state.name}
            placeholder="Enter anything you want, sweetheart"
            className="w-full h-10 !px-2 border border-black rounded-lg"
          />

          <button
            onClick={handleClick}
            className="w-full h-10 text-white bg-black rounded-lg cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
