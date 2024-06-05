// Admin component
import React from 'react';
import Navbar from './common/Navbar';
import { Outlet } from 'react-router-dom';
import './Admin.css';
import LeftSideDrawer from './common/drawer';

const Admin = () => {
    return (
        <div className="admin-container">
            <div className="sidebar">
                <LeftSideDrawer />
            </div>
            <div className="content">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;