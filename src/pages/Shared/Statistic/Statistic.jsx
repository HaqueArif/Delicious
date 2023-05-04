import React from 'react';
import './Statistic.css'

const Statistic = () => {
    return (
        <div className='bg-statistic p-5'>
            <h4 className="text-5xl lg:text-8xl text-center text-white font-semibold mt-40 mb-10">Our Statistic</h4>
            <p className='text-white text-center lg:px-64'>At our restaurant, we've served over a million happy customers and won multiple awards for our exceptional food and service. Our chefs have over 50 years of combined experience and we source our ingredients from local farms and suppliers. Come taste why we're a local favorite!</p>
            <div className='lg:px-40 mt-20 mb-32 text-white grid lg:grid-cols-2 2 xl:grid-cols-3'>
                <div className=' border-dashed border-8 mx-auto rounded-full h-64 w-64 mb-5 flex justify-center items-center'>
                    <div className='text-center'>
                        <p className='text-4xl'>153</p>
                        <p className='text-5xl font-bold'>Menu</p>
                    </div>
                </div>
                <div className=' border-dashed border-8  mx-auto rounded-full h-64 w-64 mb-5 flex justify-center items-center'>
                    <div className='text-center'>
                        <p className='text-4xl'>3.4K</p>
                        <p className='text-5xl font-bold'>Store</p>
                    </div>
                </div>
                <div className=' border-dashed border-8  mx-auto rounded-full h-64 w-64 mb-5 flex justify-center items-center'>
                    <div className='text-center'>
                        <p className='text-4xl'>32</p>
                        <p className='text-5xl font-bold'>Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;