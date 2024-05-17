import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navabar/Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="mt-[95px]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
