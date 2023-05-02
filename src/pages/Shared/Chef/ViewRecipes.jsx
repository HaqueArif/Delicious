import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {

    const data = useLoaderData();
    const {id,name, experience,bio,chef_image,likes,recipes,specialty,total_recipes} = data;
    console.log(data)
    return (
        <div>
          <h2>{experience}</h2>
        </div>
    );
};

export default ViewRecipes;