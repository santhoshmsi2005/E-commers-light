import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { div } from "motion/react-client";
import Hero from "./pages/Hero";
import Card from "./pages/Card";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Hire from "./pages/Hire";
import Footer from "./components/Footer";

const AppLayour = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <Hero />
            <Card />
        </div>
    )
}

const Route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayour />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/hire",
                element: <Hire />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Route} />);

