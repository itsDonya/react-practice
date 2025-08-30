import React, { Suspense } from "react";

import Fact from "../components/Fact";

const Loader: React.FC = () => {
  return (
    <div className="w-96 mx-auto h-10 mt-3 bg-gradient-to-l from-neutral-100/60 to-neutral-200 rounded-lg animate-pulse"></div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Fact />
      </Suspense>
    </>
  );
};

export default Home;
