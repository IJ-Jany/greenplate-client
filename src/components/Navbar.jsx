import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link,NavLink } from 'react-router';

const Navbar = () => {
  const {user,signOutUser} = use(AuthContext)

    return (
       

<div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li className='hover:text-green-600'><Link className='activeClass' to='/'>Home</Link></li>
        <li className='hover:text-green-600'><Link className='activeClass' to='/available-foods'>Available Foods</Link></li>
          <li className='hover:text-green-600'><Link className='activeClass' to='/about'>About</Link></li>
          <li className='hover:text-green-600'><Link className='activeClass' to='/contact'>Contact</Link></li>
           <li className='hover:text-green-600'><Link className='activeClass' to='/guidelines'>Guidelines</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold text-green-700 hover:text-green-800 transition-all duration-300">
      <span className="text-green-600">🍃 Green</span>Plate
    </a>
    {/* <a className="btn btn-ghost text-xl text-green-600">GreenPlate</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <li className='hover:text-green-600'><Link className='activeClass' to='/'>Home</Link></li>
        <li className='hover:text-green-600'><Link className='activeClass' to='/available-foods'>Available Foods</Link></li>
         <li className='hover:text-green-600'><Link className='activeClass' to='/about'>About</Link></li>
         <li className='hover:text-green-600'><Link className='activeClass' to='/contact'>Contact</Link></li>
          <li className='hover:text-green-600'><Link className='activeClass' to='/guidelines'>Guidelines</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
{
  user ?
  <>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL}/>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link  className='hover:text-green-600' to='/add-food'>Add Food</Link>
        <Link to='/manage-foods' className='hover:text-green-600' >Manage My Foods</Link>
        <Link className='hover:text-green-600' to='/my-requests'>My foods requests</Link>
         <Link className='btn btn-primary hover:bg-purple-400 hover:text-green-600 py-3 px-4 mt-4' onClick={signOutUser}>Logout</Link>
      </ul>
    </div>
  
  </>:
  
    <Link className="btn btn-primary hover:bg-purple-400 " to="/auth/login">Login</Link>

}
  
  </div>
  {/* //<Link className="btn" to="/auth/login">Login</Link> */}


</div>

    );
};

export default Navbar;