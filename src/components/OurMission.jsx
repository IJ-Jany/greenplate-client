import React from 'react';
import missionImg from '../assets/happybaby.png'; // replace with your image

const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-50 rounded-xl shadow-lg overflow-hidden my-12">
      
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img src={missionImg} alt="Our Mission" className="h-full w-full object-cover" />
      </div>

      {/* Right Text Content */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At GreenPlate, we aim to reduce food waste and fight hunger simultaneously. 
          Every contribution brings a meal to someone in need, empowering communities worldwide.
        </p>

        {/* Stats */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-600">1,200+</span>
            <span className="text-gray-600 text-sm">Meals Donated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-600">450+</span>
            <span className="text-gray-600 text-sm">Active Donors</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-600">50+</span>
            <span className="text-gray-600 text-sm">Communities Helped</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
