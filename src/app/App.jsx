// src/App.js

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// Import your pages
import Admin from '../pages/Admin/Admin';
import CircularPage from '../pages/Admin/Circular/Index';
import ClubBookingPage from '../pages/Admin/ClubBooking';
import ComplaintPage from '../pages/Admin/Complaint';
import DashboardPage from '../pages/Admin/Dashboard/Index';
import HouseDetail from '../pages/Admin/House';
import MeetingPage from '../pages/Admin/Meeting/Index';
import NoticePage from '../pages/Admin/Notice/Index';
import LoginPage from '../pages/Auth/Login/Index';
import RegisterPage from '../pages/Auth/Register/Index';

// Import the AuthWrapper component
import AuthWrapper from '../utils/AuthWrapper';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/admin',
      element: <AuthWrapper element={<Admin />} requiredRole="Admin" />,
      children: [
        {
          path: 'dashboard',
          element: <AuthWrapper element={<DashboardPage />} requiredRole="Admin" />,
        },
        {
          path: 'house',
          element: <AuthWrapper element={<HouseDetail />} requiredRole="Admin" />,
        },
        {
          path: 'complaint',
          element: <AuthWrapper element={<ComplaintPage />} requiredRole="Admin" />,
        },
        {
          path: 'club-booking',
          element: <AuthWrapper element={<ClubBookingPage />} requiredRole="Admin" />,
        },
        {
          path: 'circular',
          element: <AuthWrapper element={<CircularPage />} requiredRole="Admin" />,
        },
        {
          path: 'notice',
          element: <AuthWrapper element={<NoticePage />} requiredRole="Admin" />,
        },
        {
          path: 'meeting',
          element: <AuthWrapper element={<MeetingPage />} requiredRole="Admin" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;



// import Admin from '../pages/Admin/Admin';
// import CircularPage from '../pages/Admin/Circular/Index';
// import ClubBookingPage from '../pages/Admin/ClubBooking';
// import ComplaintPage from '../pages/Admin/Complaint';
// import DashboardPage from '../pages/Admin/Dashboard/Index';
// import HouseDetail from '../pages/Admin/House';
// import MeetingPage from '../pages/Admin/Meeting/Index';
// import NoticePage from '../pages/Admin/Notice/Index';
// import LoginPage from '../pages/Auth/Login/Index';
// import RegisterPage from '../pages/Auth/Register/Index';
// import './App.css';

// import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <LoginPage />,
//     },
//     {
//       path: "/register",
//       element: <RegisterPage />,
//     },
//     {
//       path: "/admin",
//       element: <Admin />,
//       children: [
//         {
//           path: "dashboard",
//           element: <DashboardPage />
//         },
//         {
//           path: "house",
//           element: <HouseDetail />
//         },
//         {
//           path: "complaint",
//           element: <ComplaintPage />
//         },
//         {
//           path: "club-booking",
//           element: <ClubBookingPage />
//         },
//         {
//           path: "circular",
//           element: <CircularPage />
//         },
//         {
//           path: "notice",
//           element: <NoticePage />
//         },
//         {
//           path: "meeting",
//           element: <MeetingPage />
//         }
//       ]
//     }
//   ]);
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
