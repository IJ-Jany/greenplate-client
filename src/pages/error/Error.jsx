import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center p-6">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
      >
        Back to Home
      </Link>
    </div>
    );
};

export default Error;