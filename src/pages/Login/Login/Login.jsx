import React from 'react';

const Login = () => {
    return (
        <div>
            <div className=' min-h-screen bg-red-500 border-orange-200  border-t-2 flex gap-20 justify-center items-center lg:px-40 '>
                <div>
                    <form>
                        <div className='max-w-sm shadow-2xl bg-base-100 rounded-2xl pt-2 pb-10 px-2 '>
                            <div className='bg-orange-200 rounded-2xl px-8 py-8'>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' placeholder='Your Email' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' placeholder='Your Password' className='border bg-transparent  border-gray-500 rounded-lg py-3 px-3' />
                                </div>
                            </div>
                            <span className='px-6'>Forget password?</span>
                            <div className='mt-10 px-6'>
                                <button className=' btn w-full bg-red-500'>Login</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div>
                <h2 className='lg:text-5xl text-white mb-3 '>Login</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius facilis natus voluptate quibusdam recusandae accusamus cum sapiente ullam non. Velit corrupti ipsa molestiae aliquam dolorum? Obcaecati dolorum ex sapiente.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;