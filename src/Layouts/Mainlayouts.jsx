import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Mainlayouts = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
            <ToastContainer />
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main className="min-h-[calc(100vh-288px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Mainlayouts;
