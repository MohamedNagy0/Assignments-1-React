import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Layout from "./Components/Layout/Layout";
import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";

import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";

export default function App() {
    let route = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "portfolio", element: <Portfolio /> },
                { path: "contacts", element: <Contacts /> },
                { path: "*", element: <NotFoundPage /> },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={route}></RouterProvider>
        </>
    );
}
