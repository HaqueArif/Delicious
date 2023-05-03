import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import ERR from '../../assets/95614-error-occurred.gif'

const Errorpage = () => {
     const { error, status } =  useRouteError() || {};
    return (
      <section className='flex items-center h-screen p-16  text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='w-40'>
          <img src={ERR} alt="" />
          </div>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-6xl  text-gray-600'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Errorpage;