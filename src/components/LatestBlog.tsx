import React from "react";

// hooks
import { useFact } from "../hooks/useBlog";

// types
type propsTypes = {
  timestamp: number;
};

const Fact: React.FC<propsTypes> = ({ timestamp }: propsTypes) => {
  const { data } = useFact(timestamp);

  return <h1 className="w-96 mx-auto">{data?.blog.title}</h1>;
};
export default Fact;
