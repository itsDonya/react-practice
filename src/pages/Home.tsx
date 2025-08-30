import React, { Suspense } from "react";

import Fact from "../components/Fact";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryClient } from "@tanstack/react-query";

const Loader: React.FC = () => {
  return (
    <div className="w-96 mx-auto h-10 mt-3 bg-gradient-to-l from-neutral-100/60 to-neutral-200 rounded-lg animate-pulse"></div>
  );
};

const Error: React.FC = () => {
  return (
    <div className="w-96 h-14 p-3 bg-red-500/20 flex items-center justify-between gap-6 border-l-4 border-red-500 rounded-lg shadow">
      <p className="text-red-500">Someting went wrong!</p>

      <p className="text-red-600 text-sm underline cursor-pointer">Try Again</p>
    </div>
  );
};

const Home: React.FC = () => {
  const queryClient = useQueryClient();

  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loader />}>
          <Fact />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Home;
