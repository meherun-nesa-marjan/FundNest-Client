import React, { useContext, useEffect, useState } from "react";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";


import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


const Navbar = ({ darkModeHandler, dark }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    const email = user?.email;
    const name = user?.displayName;
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    const handleSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

   

   
    const navItems = [
        { path: "/", element: "Home" },
        { path: "/campaigns", element: "All Campaign" },
        { path: "/About", element: "About Us" },
        { path: '/Contact', element: "Contact" },
        { path: '/Support', element: "Support" },
    ];

    return (
   <div className={`navbar dark:bg-slate-600 bg-[#FDF4E3] sticky top-0 z-50 transition-shadow duration-300 ${
    isScrolled ? 'shadow-md' : ''
  }`}>
         <div className="py-2 bg-[#FDF4E3] lg:w-11/12 dark:bg-slate-600 mx-auto">
            <div className="navbar  dark:bg-slate-600 dark:text-white">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            aria-label="Open Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
                        >
                            {navItems.map(({ path, element }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `text-[#754738] mx-3 ${isActive ? "font-bold" : ""}`
                                    }
                                >
                                    {element}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                    <NavLink
                        to="/"
                        className="lg:text-2xl flex font-bold gap-1 text-[#754738] dark:text-white"
                    >
                        <span className="py-1">
                            <FaHandsHoldingCircle />
                        </span>
                        FundNest
                    </NavLink>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `text-[#754738] text-xl mx-3  ${isActive ? "font-bold" : ""} ${dark? 'dark:bg-slate-600 dark:text-white' : ''}`
                                }
                            >
                                {element}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button onClick={darkModeHandler}>
                        {dark ? <IoSunny /> : <IoMoon />}
                    </button>

                    {user ? (
                        <div className="flex items-center space-x-4">
                            {user.photoURL && (
                                <div className="dropdown dropdown-bottom">
                                <div tabIndex={0} role="button" className=" m-1">
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={name || "No name available"}
                                    className="z-[60]"
                                >
                                    <img
                                        src={user.photoURL || "/default-avatar.png"}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full"
                                        onError={(e) => (e.target.src = "/default-avatar.png")}
                                    />
                                </a>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[50] w-52 p-2 shadow">
                                  <li><Link to={'/addCampaign'}>Add New Campaign</Link></li>
                                  <li><Link to={`/myCampaign/${email}`}>My Campaign</Link></li>
                                  <li><Link to={`/myDonations/${email}`}></Link></li>
                                  
                                </ul>
                              </div>
                              
                            )}
                            <Tooltip id="my-tooltip" />
                            <button
                                onClick={handleSignOut}
                                className="btn bg-[#754738] text-white"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex space-x-2">
                            <Link to="/login">
                                <button className="btn bg-[#754738] text-white">
                                    Log in
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="btn bg-[#754738] text-white">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
   </div>
    );
};

export default Navbar;
