import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>The page You are looking for <br /> does not exist.</h3>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Error;