import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
const Navber = () => {

    const navLinks =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Add tourist Place</Link></li>
    <li><Link to='/'>All Tourist spots</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
  <div className='flex justify-center items-center text-cyan-700'>
  <Link to='/' className="flex  text-2xl font-bold">Travel <img  src={logo} alt="" width='36px' height='32px' /> Buddies</Link >
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   <Link className='btn' to="Login">Login</Link>
  </div>
</div>
    );
};

export default Navber;