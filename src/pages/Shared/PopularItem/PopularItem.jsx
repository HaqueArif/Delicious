import React, { useEffect, useState } from 'react';
import { BiRestaurant } from "react-icons/bi";
import './PopularItems.css'


const PopularItem = () => {

    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(() => {
        fetch('https://delicious-assignment-serversite-haquearif143-gmailcom.vercel.app/popular')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error));
    }, [])


    return (
        <div className=' lg:px-20 lg:pt-20 lg:pb-10  background'>
            <h4 className="text-5xl lg:text-8xl text-center text-red-500 font-semibold pt-10 mb-10">Popular</h4>
            <p className='px-5 lg:px-44 text-center mb-10'>Discover our most popular dishes - a culinary journey featuring mouth-watering options for all tastes. Start with savory appetizers perfect for sharing, move on to delectable entrees from classic comfort foods to exotic flavors, and finish with decadent desserts. Our popular section has something for everyone. Come taste why our customers can't get enough of these crowd-pleasers.</p>
            
            <div className='flex justify-center'>
                <div className="carousel carousel-center p-10 space-x-5 lg:space-x-20 " title='use arrow to slide'>

                    {
                        items.map((item, i) => <div key={i} className="carousel-item">
                            
                            <div className="card card-compact w-64 lg:w-96 p-5 bg-base-100 shadow-xl">
                                <figure><img className='w-60' src={item.image_url} alt="item" /></figure>
                                <div className="card-body text-center">
                                    <h2 className="text-3xl font-bold text-red-500">{item.name}</h2>
                                    <p>{item.description}</p>
                                    <div className=" text-center">
                                        <button className="btn bg-red-500"> <BiRestaurant className='mr-2'/>  Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default PopularItem;