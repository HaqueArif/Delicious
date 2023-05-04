import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { getAuth } from "firebase/auth";

const NavigationBar = () => {


    const { user, logOut } = useContext(AuthContext);
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            background: isActive ? '#f0932b' : 'normal',
            padding: isActive ? '10px 18px' : '',
            borderRadius: isActive ? '20px' : ''
        }
    }



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className='bg-red-500'>
                <div className="navbar  container lg:px-24 mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
                                <li><Link to="/home" className=''>Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                {user && <Link to="/login" onClick={handleLogOut} className="btn bg-orange-400 border-none">Logout</Link>}
                            </ul>
                        </div>
                        <Link to='/home' className="btn btn-ghost normal-case sm:text-xl lg:text-3xl text-white font-extrabold ">Delicious</Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            <li className='text-white px-5'><NavLink to="/home" style={navLinkStyles}  > <button className=''>Home</button> </NavLink></li>
                            <li className='text-white'><NavLink to="/blog" style={navLinkStyles} >Blog</NavLink></li>
                        </ul>
                    </div>


                    <div className="navbar-end">

                        {user ?
                            (<div className='flex items-center'>
                                {user.photoURL ? <img
                                    className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2'
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    title={user.displayName}
                                /> : <FaUserCircle className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' title={user.displayName} />}

                                <Link to="/login" onClick={handleLogOut} className="px-5 py-3 rounded-md text-white font-bold bg-orange-400 border-none hidden lg:block ">Logout</Link>
                            </div>) : (<Link to="/login" className="btn border-none bg-orange-400">Login</Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;