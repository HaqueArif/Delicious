import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from "../../../assets/google.png"
import facebookIcon from "../../../assets/facebook.png"
import githubIcon from "../../../assets/github.png"
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {

    const [error, setError] = useState(null);
    
    const { signIn, SignInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home"

    const handleGoogleSignin = () =>{
        SignInWithGoogle()
        .then(result=>{
          
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
           
        })
        .catch(error =>{
            console.log('errorrrr', error.message);
        })
    }

    const handleGithubSignin = ()=>{
        signInWithGithub()
        .then(result=>{
          
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
          
        })
        .catch(error =>{
            console.log('errorrrr', error.message);
        })
    }

    const handleSignIn = event => {
      
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
                
            })

            .catch(error => {
                console.log(error);
                if (error.code === 'auth/user-not-found') {
                    setError('Email address not found. Please check and try again.');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Incorrect password.');
                } else {
                    setError('Something went wrong. Please try again later.');
                }
            });
    }

    return (
        <div className=' min-h-screen bg-red-500 border-orange-200 px-2   border-t-2  lg:flex  gap-20 justify-center items-center lg:px-40  md:px-20 pb-20 '>
            <div className='my-10 text-center lg:text-end'>
                <h2 className='text-3xl font-bold lg:text-5xl text-gray-800 mb-10 '>Login</h2>
                <p className='text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius facilis natus voluptate quibusdam recusandae accusamus cum sapiente ullam non. Velit corrupti ipsa molestiae aliquam dolorum? Obcaecati dolorum ex sapiente.</p>
            </div>
            <form onSubmit={handleSignIn}>
                <div className='max-w-sm shadow-2xl bg-base-100 rounded-2xl mx-auto pt-2 pb-10 px-2  '>
                    <div className=' rounded-2xl px-5 md:px-8 py-8'>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Your Email' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Your Password' className='border bg-transparent  border-gray-500 rounded-lg py-3 px-3' />
                            <span className='mt-2'>Forget password?</span>
                        </div>
                        <p className='mt-2 text-sm text-red-700'>{error}</p>
                    </div>

                    <div className='mt-5 px-6'>
                        <button className=' btn w-full bg-red-500'>Login</button>
                    </div>
                    <div className='text-center mt-2'>
                        <Link to="/register" className='hover:btn-link'>New to Delicious? Register</Link>
                    </div>
                    <div>
                        <p className='text-center mt-5'>Or Login With</p>
                        <div className='flex gap-3 mt-2 justify-center'>
                            <Link onClick={handleGoogleSignin}><img src={googleIcon} alt="" className='w-8' /></Link>
                            <Link onClick={handleGithubSignin}><img src={githubIcon} alt="" className='w-8' /></Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;