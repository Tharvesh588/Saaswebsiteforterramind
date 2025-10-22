
  import { createRoot } from "react-dom/client";
  import App from "./App.jsx";
  import "./index.css";

  const container = document.getElementById("root");
  if (!container) {
    // If the root element is missing, log an error and abort mounting.
    console.error("Root element with id 'root' not found. Cannot mount React app.");
  } else {
    createRoot(container).render(<App />);
  }
  