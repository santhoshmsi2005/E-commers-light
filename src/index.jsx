import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Route} />);

