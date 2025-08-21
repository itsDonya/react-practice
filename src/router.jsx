import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  // home page
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
