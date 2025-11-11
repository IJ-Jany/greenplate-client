import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../components/FoodCard';

const AvailableFoods = () => {
    const data = useLoaderData()
    return (
         <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto place-items-center'>
           {
            data.map(food=> <FoodCard key={food._id} food={food}/>)
           }
            </div>
    );
};

export default AvailableFoods;