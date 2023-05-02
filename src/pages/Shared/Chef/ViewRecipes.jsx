import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {

    const data = useLoaderData();
    const { id, name, experience, bio, chef_image, likes, recipes, specialty, total_recipes } = data;
    console.log(data)
    return (
        <div className='px-40 bg-red-500 py-20'>
            {
                recipes.map((recipe, i) => <div key={i}>
                    <div className="card card-compact w-8/12 mx-auto bg-base-100 shadow-xl mb-10">
                        <figure className='bg-orange-100 m-1 py-5'><img className='h-96 rounded-xl ' src={recipe.image} alt="items" /></figure>

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
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
            <div className="card card-compact bg-orange-200 shadow-xl">
                <figure></figure>
                <div className="card-body">
                    <img className='w-20' src={chef_image} alt="Shoes" />
                    <h2 className="card-title">{name}</h2>
                    <p><span className='text-red-500 font-bold'>Specialty:</span> {specialty}</p>
                    <p><span className='text-red-500 font-bold'>Bio:</span> {bio}</p>
                    <p><span className='text-red-500 font-bold'></span>{likes}</p>
                    <p><span className='text-red-500 font-bold'>Total Recipes:</span> {total_recipes}</p>
                    <p><span className='text-red-500 font-bold'>Years of Experience: </span>{experience}</p>

                </div>

            </div>

        </div>
    );
};

export default ViewRecipes;