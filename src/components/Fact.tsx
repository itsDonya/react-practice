import React from "react";

// hooks
import { useFact } from "../hooks/useFact";

const Fact: React.FC = () => {
  const { data } = useFact();

  return <h1 className="w-96 mx-auto">{data?.blog.title}</h1>;
};

export default Fact;
