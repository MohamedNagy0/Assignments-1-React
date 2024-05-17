import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    function hideAndShowNav() {
        const navUl = document.querySelector("ul");
        const header = document.querySelector("header");
        header.classList.toggle("overflow-hidden");
        navUl.classList.toggle("h-0");
        navUl.classList.toggle("ul-height");
    }
    return (
        <>
            <header className="z-50 bg-my-gray p-2 py-4 fixed top-0 left-0 right-0 overflow-hidden">
                <div className="container m-auto">
                    <nav className="flex items-center justify-between w-[90%] m-auto text-white font-bold ">
                        <h1 className="text-[26px] md:text-[32px] p-3">
                            <Link to={"/"}>START FRAMEWORK</Link>
                        </h1>
                        <i
                            onClick={hideAndShowNav}
                            className="fa-solid fa-bars lg:hidden text-2xl cursor-pointer"
                        ></i>
                        <ul className="flex-col  items-start h-0 lg:items-center lg:static lg:flex-row lg:w-fit lg:py-0 lg-pl-0 pl-4 flex py-3 gap-6 absolute top-full left-0 bg-my-gray w-full ">
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
