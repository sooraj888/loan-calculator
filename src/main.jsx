import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "./contexts/ThemeContext.jsx";
import { AppProvider } from "@toolpad/core/AppProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ThemeProviderWrapper>
          <App />
        </ThemeProviderWrapper>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
