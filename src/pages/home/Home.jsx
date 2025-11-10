import React from 'react';
import Banner from '../../components/Banner';
import FoodCard from '../../components/FoodCard';
import { Link, useLoaderData } from 'react-router';
import HowWorks from '../../components/HowWorks';
import OurMission from '../../components/OurMission';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner/>
            <div className='py-10 grid grid-cols-3 gap-3 max-w-7xl mx-auto'>
           {
            data.map(food=> <FoodCard key={food._id} food={food}/>)
           }
            </div>
           <div className=' py-6 flex justify-center items-center'> <Link to='/available-foods' className='btn btn-primary hover:bg-purple-400'>Show All</Link></div>
            <HowWorks/>
            <OurMission/>
        </div>
    );
};

export default Home;