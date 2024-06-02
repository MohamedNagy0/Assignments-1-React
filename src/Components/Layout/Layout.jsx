import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navabar/Navbar";
import Footer from "../../Pages/Footer/Footer";

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
