import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";
import Cursor from "./components/Cursor/Cursor.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Cursor />
    <Navbar />
    <Home />
  </React.StrictMode>
);
