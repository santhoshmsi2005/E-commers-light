import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home"
import Hire from "../pages/Hire";
import ProductsDetail from "../pages/ProductsDetail"

const Route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/productsDetail/:id",
                element: <ProductsDetail />
            },
            {
                path: "/hire",
                element: <Hire />
            }
        ]
    }
])

export default Route;