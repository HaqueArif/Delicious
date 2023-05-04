import React from 'react';
import NavigationBar from '../pages/Shared/Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {

    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;