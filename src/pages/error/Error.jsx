import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/error.png'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center p-6">
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-64 mb-6"
      />
    
      <Link
        to="/"
        className="btn btn-primary hover:bg-purple-400"
      >
        Back to Home
      </Link>
    </div>
    );
};

export default Error;