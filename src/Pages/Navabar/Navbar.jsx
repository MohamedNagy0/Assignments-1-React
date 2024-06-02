import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="z-50 bg-my-gray p-2 py-4 fixed top-0 left-0 right-0 overflow-hidden">
                <div className="container m-auto">
                    <nav className="flex items-center justify-between w-[90%] m-auto text-white font-bold flex-wrap">
                        <h1 className="text-[26px] md:text-[32px] p-3">
                            <Link to={"/"}>START FRAMEWORK</Link>
                        </h1>
                        <i
                            onClick={() => {
                                setOpen(!open);
                            }}
                            className="fa-solid fa-bars lg:hidden text-2xl cursor-pointer"
                        ></i>
                        <ul
                            className={`w-full flex-col items-start gap-6 py-3 pl-4 bg-my-gray  duration-300 lg:flex lg:items-center lg:flex-row lg:w-fit lg:py-0 lg:pl-0 ${
                                open ? "flex" : "hidden"
                            }`}
                        >
                            <li>
                                <NavLink className="p-2" to={"about"}>
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="p-2" to={"portfolio"}>
                                    PORTFOLIO
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="p-2" to={"contacts"}>
                                    CONTACT
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
