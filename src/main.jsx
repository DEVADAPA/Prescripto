console.log("Vite is running!");

// If using React, mount the app:
import { createRoot } from "react-dom/client";
import React from "react";

const App = () => <h1>Hello from Vite + React!</h1>;

const root = createRoot(document.getElementById("app"));
root.render(<App />);
