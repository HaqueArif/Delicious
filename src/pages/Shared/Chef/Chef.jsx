import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";

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
                        <div className="card lg:w-96 bg-base-100 pt-10 mx-auto  shadow-xl">
                            <figure><img className='w-60 px-2' src={chef.chef_image} alt="Shoes" /></figure>
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
                                    <button className="btn bg-red-500">View Recipes</button>
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