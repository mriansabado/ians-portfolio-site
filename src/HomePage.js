import React from 'react';
import HomeIntro from './HomeIntro.js';
import Background from './Background-Effect';
import About from './About.js';
import logo from './assets/favicon.co.png';

const HomePage = () => {
  return (
      <>
          <HomeIntro />
        <div className='main-wrap'>
              {/* Hero Section */}
            <div className="hero min-h-screen">
            <Background />    
            <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-extrabold	">Ian Sabado</h1>
                  <p className="mb-1">Hi, im a Software Engineer based in San Francisco Bay Area</p>
                  </div>
              </div>
            </div>
              {/* Hero Section Ends */}
              {/* About Section */}
              <About />
        </div>
      </>
   )
};

export default HomePage;
