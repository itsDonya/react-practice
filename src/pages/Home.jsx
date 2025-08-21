import React, { createContext, useState } from "react";

import Text from "../components/Text";

export const ProfileContext = createContext();

const Home = () => {
  const [name, setName] = useState("Donya");

  return (
    <>
      <ProfileContext.Provider value={{ name, setName }}>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl">
            Hello, <span className="font-bold">{name}</span>!
          </h1>

          <Text />
        </div>
      </ProfileContext.Provider>
    </>
  );
};

export default Home;
