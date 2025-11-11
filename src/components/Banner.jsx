import React from 'react';
import hungrybabyimg from '../assets/hungrybaby.png';

const Banner = () => {
  return (
    <div className="relative w-full h-full py-18 flex items-center justify-center overflow-hidden rounded-xl my-8">
      {/* Background Image */}
      <img
        src={hungrybabyimg}
        alt="Hungry child"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
          Join Hands to End Hunger
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm">
          A small contribution can provide meals to those in need, and with the
          support of the UN World Food Programme, every donation reaches someone
          who counts. Let’s fight hunger together.
        </p>

        {/* Search Box */}
        <div className="flex items-center justify-center">
          <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-md overflow-hidden">
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
            <button className="btn bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
