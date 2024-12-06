import React, { useContext } from 'react';
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const email = user?.email
    const name = user?.name;
    console.log(name)
  
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            })
            .catch((error) => {
            });
    }
    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/campaigns', element: 'All Campaign' },
        { path: '/addCampaign', element: 'Add New Campaign' },
        { path: `/myCampaign/${email}`, element: 'My Campaign' },
        { path: `/myDonations/${email}`, element: 'My Donations' },

    ];
    return (
        <div className='py-5 lg:w-11/12 mx-auto'>
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
                                        ` text-[#754738] mx-3 ${isActive ? ' font-bold' : ''}`
                                    }
                                >
                                    {element}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                    <NavLink to="/" className={'lg:text-2xl flex font-bold gap-1 text-[#754738]'}> <span className='py-1'><FaHandsHoldingCircle /></span> FundNest</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    ` text-[#754738] text-xl mx-3 ${isActive ? ' font-bold' : ''}`
                                }
                            >
                                {element}
                            </NavLink>
                        ))}

                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? (

                            <div className="flex items-center space-x-4">
                              {user.photoURL && (
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={name || "No name available"}
                                >
                                    <img
                                        src={user.photoURL || "/default-avatar.png"}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full"
                                        onError={(e) => (e.target.src = "/default-avatar.png")}
                                    />
                                </a>
                            )}
                            <Tooltip id="my-tooltip" />
                                

                                <button onClick={handleSignOut}
                                    className="btn bg-[#754738] text-white">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="">
                                <Link to={'/Login'}>
                                    <button className="btn bg-[#754738] text-white">
                                        Log in
                                    </button>
                                </Link>
                                <Link to={'/Register'}>
                                    <button className="btn bg-[#754738] text-white">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        )
                    }














                </div>
            </div>
        </div>
    );
};

export default Navbar;