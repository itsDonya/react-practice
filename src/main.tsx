import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/style/main.css";
import { router } from "./router";

// providers
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// stores
import { store } from "./stores/login.store";

// variables
const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ReduxProvider>
  </StrictMode>
);
