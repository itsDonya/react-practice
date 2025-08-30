import React from "react";

import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>Welcome Home</h1>

      <Link to={"/blog"}>Blog</Link>
    </>
  );
};

export default Home;
