import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6 text-gray-700">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Go Home
            </Link>
        </div>
        </div>
    );
};

export default Error;