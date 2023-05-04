import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {

    const [error, setError] = useState(null);

    const { loading, createUser, updateUserData, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='animate-ping'>Loading</p>
        </div>
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        form.reset();

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                logOut();
                const createdUser = result.user;
                updateUserData(result.user, name, photo)
                console.log(createdUser);
                setError(null)
                navigate('/login')
            })

            .catch(error => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                    setError("Email already in use. Please try a different email.");
                } else if (error.code === "auth/invalid-email") {
                    setError("Invalid email address. Please enter a valid email.");
                } else if (error.code === "auth/weak-password") {
                    setError("Password must be 6 characters");
                } else {
                    setError("An error occurred. Please try again later.");
                }
            })
    }

    return (
        <div className=' min-h-screen bg-red-500 border-orange-200 px-2   border-t-2  lg:flex  gap-20 justify-center items-center lg:px-40  md:px-20 pb-20 '>
            <div className='my-10 text-center lg:text-end'>
                <h2 className='text-3xl font-bold lg:text-5xl text-gray-800 mb-10 '>Register</h2>
                <p className='text-gray-800'>If you experience any issues during the registration process, reach out to the DELICIOUS customer support team for assistance. Consider opting in to the DELICIOUS loyalty program or email newsletter, if available, to receive special offers, promotions, and other benefits.</p>
            </div>

            <form onSubmit={handleRegister}>
                <div className='max-w-sm shadow-2xl bg-base-100 rounded-2xl mx-auto pt-2 pb-10 px-2  '>
                    <div className=' rounded-2xl px-5 md:px-8 py-8'>

                        <div className='flex flex-col mb-3'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' placeholder='Your Name' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Your Email' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Your Password' className='border bg-transparent  border-gray-500 rounded-lg py-3 px-3' required />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="photo">Phot URL</label>
                            <input type="text" name='photo' placeholder='Photo URL' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                        </div>
                        <p className='mt-1 text-red-600'>{error}</p>
                    </div>

                    <div className='mt-10 px-6'>
                        <button className=' btn w-full bg-red-500'>Register</button>
                    </div>
                    
                    <div className='text-center mt-2'>
                        <Link to="/login" className='hover:btn-link text-sm'>Already have an Account? Login</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;