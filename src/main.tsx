import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/style/main.css";
import { router } from "./router";

// providers
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
