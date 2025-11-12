import React from 'react';
import hungrybabyimg from '../assets/hungrybaby.png';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="relative w-full h-full py-18 flex items-center justify-center overflow-hidden rounded-xl my-8">
      <img src={hungrybabyimg} className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
  <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md"> Join Hands to End Hunger </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm">  A small contribution can provide meals to those in need, and with the  support of the UN World Food Programme, every donation reaches someone who counts. Let’s fight hunger together. </p>
        <Link to='/available-foods' className='btn btn-primary hover:bg-purple-400 hover:text-green-600 py-3 px-4 mt-4' >View All Foods</Link>
      </div>
    </div>
  );
};

export default Banner;
