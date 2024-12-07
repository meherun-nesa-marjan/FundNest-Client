import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Mainlayouts = () => {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark((prevDark) => {
            const newDark = !prevDark;
            document.body.classList.toggle("dark", newDark);
            return newDark;
        });
    }


    return (
        <div className="dark:bg-slate-600 dark:text-white!">
            <ToastContainer />
            <Navbar darkModeHandler={darkModeHandler} dark={dark} />
            <main className="min-h-[calc(100vh-288px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Mainlayouts;
