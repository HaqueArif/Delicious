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
        <h4 className="text-5xl lg:text-8xl text-center text-red-500 font-semibold mb-10">Our Chef</h4>
         <div className='grid grid-cols-3 px-28 pb-20 gap-10 ' >
            
            {
                chefInfo.map(chef => <div key={chef.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-60' src={chef.chef_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{chef.name}</h2>
                            <p>Years of Experience: {chef.experience}</p>
                            <p>Total Recipes: </p>
                            <p><AiOutlineLike/>{chef.likes}</p>
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