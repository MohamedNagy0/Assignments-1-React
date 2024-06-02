import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Layout from "./Components/Layout/Layout";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

import "./App.css";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";

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
