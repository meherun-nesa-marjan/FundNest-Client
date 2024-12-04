import React from 'react';

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/campaigns', element: 'All Campaign' },
        { path: '/addCampaign', element: 'Add New Campaign' },
        { path: '/myCampaign', element: 'My Campaign' },
        { path: '/myDonations', element: 'My Donations' },

    ];
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                            {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    ` text-cyan-900 mx-3 ${isActive ? ' font-bold' : ''}`
                                }
                            >
                                {element}
                            </NavLink>
                        ))}
                        </ul>
                    </div>
                    <NavLink to="/" className={'lg:text-2xl flex font-bold gap-1 text-green-900'}> <span className='py-1'></span> FundNest</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    ` text-cyan-900 mx-3 ${isActive ? ' font-bold' : ''}`
                                }
                            >
                                {element}
                            </NavLink>
                        ))}

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/Login'}>
                        <button className="btn bg-[#137257] text-white">
                        Log in
                        </button>
                    </Link>
                    <Link to={'/Login'}>
                        <button className="btn bg-[#137257] text-white">
                        Register
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Navbar;