import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/style/main.css";
import { router } from "./router";

// providers
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

// stores
import { store } from "./stores/login.store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </StrictMode>
);
