import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p style={{ position: "absolute", top: 5, left: 5 }}>
      Hover on the icon to view its name ;)
    </p>
    <App />
  </StrictMode>
);
