// src/utils/AuthWrapper.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthWrapper = ({ element, requiredRole }) => {
    const token = localStorage.getItem('Authorization'); // Check if token exists
    const userData = localStorage.getItem('userData'); // Get user role from localStorage
    const userRole = userData?.userType;

    // if (!token) {
    //     return <Navigate to="/" replace />;
    // }

    // if (requiredRole && userRole !== requiredRole) {
    //     return <Navigate to="/" replace />;
    // }

    return <Route element={element} />;
};

export default AuthWrapper;
