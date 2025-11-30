import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import { BrowserRouter } from "react-router";
import { baseName } from "~/config";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
