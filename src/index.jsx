import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { div } from "motion/react-client";
import Hero from "./pages/Hero";
import Card from "./pages/Card";
import Navbar from "./components/Navbar";

const AppLayour = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppLayour />
    </React.StrictMode>
);

