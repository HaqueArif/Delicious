import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = () => {

    const [chefInfo, setChefInfo] = useState([]);
    console.log(chefInfo)
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefInfo(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className=' bg-orange-100 pt-20'>
            <h4 className="text-5xl lg:text-7xl text-center text-red-500 font-semibold mb-16">Our Chef</h4>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 px-2 lg:px-20 xl:px-20 2xl:px-28 pb-20 gap-10 ' >

                {
                    chefInfo.map(chef => <div key={chef.id}>
                        <div className="card lg:w-96 bg-base-100 p-1  mx-auto   shadow-xl">
                            <div className='bg-orange-100 py-10 rounded-2xl shadow-md'>
                            <LazyLoad height={200} width={370} threshold={.5}>
                                    <figure><img className='w-60 px-2' src={chef.chef_image} alt="Shoes" /></figure>
                                </LazyLoad>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-slate-800">{chef.name}</h2>
                                <p className='text-slate-600'>Years of Experience: <span className='text-red-500'>{chef.experience}</span></p>

                                <div className='flex justify-between'>
                                    <p className='text-slate-600'>Total Recipes: <span className='text-red-500'>{chef.total_recipes}</span> </p>
                                    <div className='flex items-center gap-2'>
                                        <AiOutlineLike /><p className='text-red-500'>{chef.likes}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/chef/${chef.id}`} className="btn bg-red-500">View Recipes</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chef;