import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const locaton = useLocation();
    
    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='animate-ping'>Loading</p>
        </div>
    }
    
    if(user){
        return children;
    }

    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoutes;