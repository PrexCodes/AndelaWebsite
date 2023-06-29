import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
        ]
    }
])