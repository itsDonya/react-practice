import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

// lazy components
const BlogLazy = React.lazy(() => import("../components/LatestBlog"));

// types
type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};

const Loader: React.FC = () => {
  return (
    <div className="w-96 mx-auto h-10 mt-3 bg-gradient-to-l from-neutral-100/60 to-neutral-200 rounded-lg animate-pulse"></div>
  );
};

const Error: React.FC<ErrorFallbackProps> = ({ resetErrorBoundary }) => {
  return (
    <div className="w-96 h-14 p-3 bg-red-500/20 flex items-center justify-between gap-6 border-l-4 border-red-500 rounded-lg shadow">
      <p className="text-red-500">Someting went wrong!</p>

      <p
        onClick={resetErrorBoundary}
        className="text-red-600 text-sm underline cursor-pointer">
        Try Again
      </p>
    </div>
  );
};

const BlogPage: React.FC = () => {
  // states
  const [timestamp, setTimestamp] = useState<number>(Date.now());

  // variables

  // functions
  const handleReset = () => {
    setTimestamp(Date.now());
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={Error} onReset={handleReset}>
        <Suspense fallback={<Loader />}>
          <BlogLazy timestamp={timestamp} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default BlogPage;
