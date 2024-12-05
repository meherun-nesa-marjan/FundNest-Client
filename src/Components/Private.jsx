import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
   
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-sm"></span>
        </div>
      );
    }
  
    if (user) {
      return children;
    }
    return (
      <Navigate state={{from:location} } to="/Login" replace></Navigate>
      
    )
};

export default Private;