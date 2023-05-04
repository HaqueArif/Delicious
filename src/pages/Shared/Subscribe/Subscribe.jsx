import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-orange-100 lg:px-40 px-5 py-40 '>
            <h2 className='text-center text-red-500 text-4xl lg:text-6xl font-bold mb-10'>Subscribe</h2>
            <p className='text-center px-5 md:px-10 lg:px-20 xl:px-40 mb-10'>To get access to exclusive discounts and promotions, which can help you save money on your orders.  Reward loyal subscribers with special perks, such as free delivery, birthday discounts, or exclusive menu items.</p>

            <div className='bg-white w-60 lg:w-7/12 mx-auto rounded-full flex justify-between shadow-lg'>
                <input className='bg-transparent  w-40 lg:w-full ps-3 py-2 outline-none lg:py-5 lg:px-10' type="email" placeholder='Your Email' />
                <button className='rounded-full px-1 md:px-10 text-white font-extrabold  bg-red-500'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;