import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CategoryContextProvider } from "./context/CategoryContext.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const queryClient = new QueryClient();

const breakpoints = {
  base: "0px",
  sm: "320px",
  xs: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
  "2xl": "1600px",
  "2xxl": "1750px",
};

const theme = extendTheme({ breakpoints });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SearchContextProvider>
            <CategoryContextProvider>
              <ChakraProvider
                theme={theme}
                resetCSS={false}
                disableGlobalStyle={true}
              >
                <App />
              </ChakraProvider>
            </CategoryContextProvider>
          </SearchContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
