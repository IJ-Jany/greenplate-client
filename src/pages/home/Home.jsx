import React from 'react';
import Banner from '../../components/Banner';
import FoodCard from '../../components/FoodCard';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner/>
            <div className='grid grid-cols-3 gap-3'>
           {
            data.map(food=> <FoodCard key={food._id} food={food}/>)
           }
            </div>
            <Link className='bg-blue-300'>all available foods</Link>
        </div>
    );
};

export default Home;