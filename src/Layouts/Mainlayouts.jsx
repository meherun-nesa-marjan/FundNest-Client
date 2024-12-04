import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainlayouts = () => {
    return (
        <div>
         <Outlet />
        </div>
    );
};

export default Mainlayouts;