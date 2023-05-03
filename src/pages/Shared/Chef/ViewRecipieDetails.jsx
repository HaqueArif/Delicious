import React from 'react';
import NavigationBar from '../Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const ViewRecipieDetails = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default ViewRecipieDetails;