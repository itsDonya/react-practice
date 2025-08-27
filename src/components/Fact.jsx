import React from "react";

// hookes
import { useCafFact } from "../hooks/useCatFact";

const Fact = () => {
  const { data, isPending, isError, error, refetch } =
    useCafFact("Reftech Done!");

  if (isError)
    return (
      <>
        <p className="text-xl text-red-500 animate-pulse">
          An error occurred: {error.message}
        </p>

        <button
          onClick={refetch}
          className="px-4 py-2 text-white bg-red-500 flex items-center justify-center rounded-lg hover:brightness-125 cursor-pointer transition-all duration-300">
          <span>Try Again</span>
        </button>
      </>
    );

  if (isPending)
    return (
      <p className="text-xl text-fuchsia-500 animate-pulse">Fetching fact...</p>
    );

  return (
    <>
      <p className="text-xl text-teal-700 font-bold">{data?.fact}</p>

      <button
        onClick={refetch}
        className="px-4 py-2 text-white bg-green-500 flex items-center justify-center rounded-lg hover:brightness-125 cursor-pointer transition-all duration-300">
        <span>Generate a New Fact</span>
      </button>
    </>
  );
};

export default Fact;
