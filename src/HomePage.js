import React from 'react';
import HomeIntro from './HomeIntro.js';
import Background from './Background-Effect';
import logo from './assets/favicon.co.png';

const HomePage = () => {
  return (
      (
        <div className='main-wrap'>
        {/* Navbar */}
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                      </div>
                      <div className='text-center'>
                          <img src={logo} style={{ 'height': '50px' }} ></img>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                </ul>
            </div>
            </div>
              {/* Navbar End  */}


            <HomeIntro />
              {/* Hero Section */}
            <div className="hero min-h-screen">
            <Background />    
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Ian Sabado</h1>
                <p className="mb-1">Hi, im a Software Engineer based in San Francisco Bay Area</p>
                </div>
            </div>
            </div>
            {/* Hero Section Ends */}
        
        </div>


   )
  );
};

export default HomePage;
