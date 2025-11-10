import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           <Footer/>
           <ToastContainer/>
        </div>
    );
};

export default MainLayout;