import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import Cursor from "./components/Cursor/Cursor.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home/Home.tsx";
import Team from "./components/Teams/Team.tsx";
import Faculty from "./components/Faculty/Faculty.tsx";
import Events from "./components/Events/Events.tsx";
// import Error from "./components/Error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/faculty",
    element: <Faculty />
  },
  {
    path: "/events",
    element: <Events />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Cursor />
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
