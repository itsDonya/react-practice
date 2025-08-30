import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import BlogPage from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
]);
