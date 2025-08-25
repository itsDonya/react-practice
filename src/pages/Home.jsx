import React from "react";
import Fact from "../components/Fact";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-black">Fun Random Facts :)</h1>

      <Fact />
    </div>
  );
};

export default Home;
