import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../components/FoodCard';

const AvailableFoods = () => {
    const data = useLoaderData()
    return (
         <div className='py-10 grid grid-cols-3 gap-3 max-w-7xl mx-auto'>
           {
            data.map(food=> <FoodCard key={food._id} food={food}/>)
           }
            </div>
    );
};

export default AvailableFoods;