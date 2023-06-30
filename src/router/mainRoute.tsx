import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import Enterprise from "../pages/Enterprise";

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/enterprise',
                element: <Enterprise/>
            },
            
        ]
    }
])