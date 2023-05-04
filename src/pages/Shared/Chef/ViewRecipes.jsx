import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaArrowAltCircleDown, FaArrowDown, FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ViewRecipes = () => {

    const data = useLoaderData();
    const { name, experience, bio, chef_image, likes, recipes, specialty, total_recipes } = data;
    console.log(data)

    const [buttons, setButtons] = useState(recipes.map(() => ({ isDisabled: false })));
    
    const handleClickDisable = (index) => {
        const newButtons = [...buttons];
        newButtons[index].isDisabled = true;
        setButtons(newButtons);
        toast.success('The recipe is your favorite')
    };

    

    return (
        <div className='lg:px-40 bg-red-500 py-20 px-5 border-orange-200 border-t-2'>
             <div className="card card-compact mt-10 bg-orange-200 shadow-xl">
                <div className="card-body">
                    <img className='w-20' src={chef_image} alt="Shoes" />
                    <h2 className="card-title">{name}</h2>
                    <p><span className='text-red-500 font-bold'>Specialty:</span> {specialty}</p>
                    <p><span className='text-red-500 font-bold'>Bio:</span> {bio}</p>
                    <p className='flex items-center gap-2'><span className='text-red-500 font-bold'>Likes:</span> <span className='text-red-500 font-bold'><AiOutlineLike /></span>{likes}</p>
                    <p><span className='text-red-500 font-bold'>Total Recipes:</span> {total_recipes}</p>
                    <p><span className='text-red-500 font-bold'>Years of Experience: </span>{experience}</p>
                </div>
            </div>
            <div className='my-20 flex gap-3 items-center justify-center'>
                <p className='text-white font-bold text-3xl'>{name}'s Recipes</p>
                <FaArrowDown className='text-3xl animate-bounce'></FaArrowDown>
            </div>
            {
                recipes.map((recipe, i) => <div key={i}>
                    <div className="card card-compact md:w-8/12 mx-auto bg-base-100 shadow-xl mb-10">
                        <figure className='bg-orange-100 m-1 py-5'><img className='rounded-xl ' src={recipe.image} alt="items" /></figure>
                        <p className='text-center mt-5'>
                            <Rating
                                readonly
                                placeholderRating={recipe.rating.number}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-red-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </p>

                        <div className="card-body text-center">
                            <h2 className="font-bold text-red-500 text-3xl text-center">{recipe.name}</h2>
                            <p></p>
                            <p> <span className='text-red-500 font-bold'>Ingredients: </span> {recipe.ingredients}</p>
                            <p><span className='text-red-500 font-bold'>Instructions: </span>{recipe.instructions}</p>
                            <button onClick={() => handleClickDisable(i)} disabled={buttons[i].isDisabled} className="btn gap-2">
                                Favorite 
                                {
                                    buttons[i].isDisabled? <> <FaHeart className='text-red-500'></FaHeart></> : <FaRegHeart></FaRegHeart>
                                }
                            </button>
                            <ToastContainer />

                        </div>
                    </div>
                </div>)
            }
            <p className='animate-pulse font-bold text-center text-2xl mt-20'>More Recipes are coming soon!!!</p>
           
        </div>
    );
};

export default ViewRecipes;