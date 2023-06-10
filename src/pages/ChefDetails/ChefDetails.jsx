import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>
            <div className='banner flex'>
                <div className='flex-auto'>
                    <img src={chefDetails.chefPicture} alt="" />
                </div>
                <div className='flex-auto'>
                    <h3>{chefDetails.chefName}</h3>
                    <p>Category: {chefDetails.category}</p>
                    <p>Year of experience: {chefDetails.yearOfExperience}</p>
                    <p>Number of recipes: {chefDetails.numOfRecipes}</p>
                    <p>Likes: {chefDetails.likes}</p>
                    <p>Description: {chefDetails.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;