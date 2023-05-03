import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header text-center lg:px-24'>
                <div className='pt-40'>

                    <p className='text-white text-5xl lg:text-9xl mb-8'>Delicious</p>
                </div>
                <p className='text-white lg:px-40 lg:text-xl mb-10'>Experience the best Chinese Cuisine at DELICIOUS. We use only the freshest ingredients and authentic recipes to create delicious dishes that will satisfy your taste buds.</p>
                <button className='btn bg-orange-400 border-none'>Show Recipes</button>
            </div>
        </div>
    );
};

export default Header;