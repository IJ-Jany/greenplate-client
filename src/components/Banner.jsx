import React from 'react';
import hungrybabyimg from '../assets/hungrybaby.png'

const Banner = () => {
    return (  <div className='flex items-center justify-between gap-6 py-8 max-w-7xl mx-auto bg-green-50 rounded-xl shadow-lg my-12'>

   
    <div>
        <h1 className='text-center text-3xl font-bold text-green-600 mb-8'>Join Hands to End Hunger</h1>
        <p className='text-gray-700 mb-6'>A small contribution can provide meals to those in need, and with the support of the UN World Food Programme, every donation reaches someone who counts. Let’s fight hunger together.</p>
     {/* <div className=''>
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
  <input className='outline-none bg-transparent' type="search" required placeholder="Search" />
</label>
      </div>
      <div> <button class=" mx-auto
       justify-center items-center my-4 btn btn-primary hover:bg-purple-400 " >Search</button></div>
     </div> */}
     <div className="flex items-center justify-center py-6">
  <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden">
    {/* Search Icon */}
    <div className="pl-4 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
        />
      </svg>
    </div>

    {/* Input Field */}
    <input
      type="text"
      placeholder="Search for food"
      className="flex-1 px-3 py-2 text-gray-700 focus:outline-none bg-transparent"
    />

    {/* Search Button */}
    <button className="btn btn-primary hover:bg-purple-400 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors">
      Search
    </button>
  </div>
</div>

    </div>
     <div className="h-full">
        <img src={hungrybabyimg} alt="" className="rounded-r-lg w-full h-full object-cover"/>
    </div>
  </div>
    );
};

export default Banner;