import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = user !== null;
    // XOR - if not logged in and requires logged in OR is logged in and requires NOT logged in
    if (auth ^ isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;
