import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-508px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Home;