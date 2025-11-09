import React from 'react';
import hungrybabyimg from '../assets/hungrybaby.png'

const Banner = () => {
    return (
  <div className='flex items-center justify-between gap-6 py-8'>
    <div>
        <img src={hungrybabyimg} alt="" className="rounded-l-lg"/>
    </div>
    <div>
        <h1 className='text-center font-bold text-2xl text-green-600'>Join Hands to End Hunger</h1>
        <p className='text-gray-500 text-sm'>A small contribution can provide meals to those in need, and with the support of the UN World Food Programme, every donation reaches someone who counts. Let’s fight hunger together.</p>
      <div className='pt-6 flex justify-center'>
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
      </div>
    </div>
  </div>
    );
};

export default Banner;