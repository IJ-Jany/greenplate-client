import React from 'react';
import { FaUpload, FaSearch, FaHandHolding } from 'react-icons/fa';

const HowWorks = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaUpload className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Post Food</h3>
            <p className="text-gray-500 text-sm text-center">
              Share your surplus food with those in need. Quickly post items online.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaSearch className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Food</h3>
            <p className="text-gray-500 text-sm text-center">
              Browse available meals near you and find food you want to collect.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaHandHolding className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collect Food</h3>
            <p className="text-gray-500 text-sm text-center">
              Safely collect the food and help reduce hunger in your community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
