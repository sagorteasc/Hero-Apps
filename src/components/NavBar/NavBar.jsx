import { Link, NavLink } from "react-router-dom";
import NavbarLogo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";

const NavBar = () => {

    const navList = <>
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold underline"
                        : "text-black opacity-90 font-medium"}
                to={"/"}>
                Home
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) =>
                isActive ?
                    "bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold underline"
                    : "text-black opacity-90 font-medium"}
                to={"/apps"}>
                Apps
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) =>
                isActive ?
                    "bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold underline"
                    : "text-black opacity-90 font-medium"}
                to={"/installation"}>
                Installation
            </NavLink>
        </li>
    </>

    return (
        <div>
            <nav className="border-gray-200 navbar bg-base-100 border-b w-full mx-auto md:w-11/12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navList}
                        </ul>
                    </div>
                    <h3 className="flex items-center gap-2 md:hidden lg:flex">
                        <img className="w-8 h-8" src={NavbarLogo} />
                        <Link className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold" to={"/"}>HERO.IO</Link>
                    </h3>
                </div>

                <div className="navbar-center">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navList}
                        </ul>
                    </div>
                    <div className="hidden md:flex lg:hidden">
                        <h3 className="flex items-center gap-2">
                            <img className="w-8 h-8" src={NavbarLogo} />
                            <Link className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold" to={"/"}>HERO.IO</Link>
                        </h3>
                    </div>
                </div>

                <div className="navbar-end">

                    <Link
                        className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] text-white btn flex gap-2 items-center"
                        to={"https://github.com/sagorteasc"}>
                        <FaGithub /> Contribute
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;