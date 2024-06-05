// src/utils/ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem('Authorization'); // Check if token exists

    return token ? (
        <Route element={element} />
    ) : (
        <Navigate to="/" replace />
    );
};

export default ProtectedRoute;



// // src/utils/ProtectedRoute.js

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Assuming you are using Redux for authentication state

// const ProtectedRoute = ({ path, element }) => {
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Replace with your actual authentication state

//     return isAuthenticated ? (
//         <Route path={path} element={element} />
//     ) : (
//         <Navigate to="/" replace />
//     );
// };

// export default ProtectedRoute;
