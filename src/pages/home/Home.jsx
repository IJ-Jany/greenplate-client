import React from 'react';
import Banner from '../../components/Banner';
import FoodCard from '../../components/FoodCard';
import { Link, useLoaderData } from 'react-router';
import HowWorks from '../../components/HowWorks';
import OurMission from '../../components/OurMission';
import Motion from '../../components/Motion';
import Features from '../../components/Features';
import Services from '../../components/Services';
import Categories from '../../components/Categories';
import Highlights from '../../components/Highlights';
import Statistics from '../../components/Statistics';
import Testimonials from '../../components/Testimonials';
import Blogs from '../../components/Blogs';
import Newsletter from '../../components/Newsletter';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner/>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto place-items-center'>
           {
            data.map(food=> <FoodCard key={food._id} food={food}/>)
           }
            </div>
           <div className=' py-6 flex justify-center items-center'> <Link to='/available-foods' className='btn btn-primary hover:bg-purple-400'>Show All</Link></div>
            <HowWorks/>
            <CTA/>
            <Newsletter/>
            <Statistics/>
            <FAQ/>
            <Features/>
            <Testimonials/>
             <Motion/>
             <Highlights/>
          
            <OurMission/>
            <Services/>
        </div>
    );
};

export default Home;