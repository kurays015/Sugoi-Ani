import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { CategoryContextProvider } from "./context/CategoryContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <CategoryContextProvider>
            <App />
          </CategoryContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
