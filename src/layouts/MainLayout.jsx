import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer2 from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
         
          <Footer2/>
           <ToastContainer/>
        </div>
    );
};

export default MainLayout;