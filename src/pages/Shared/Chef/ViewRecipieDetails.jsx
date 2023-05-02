import React from 'react';
import NavigationBar from '../Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const ViewRecipieDetails = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
           <Outlet></Outlet>
        </div>
    );
};

export default ViewRecipieDetails;