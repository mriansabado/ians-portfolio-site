import React from 'react';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './contact.js';
import './assets/Background.css';
import NightImage from './assets/bannerNight.png';

const HomePage = () => {
  return (
    <>
      {/* Background Effect */}
      <div 
        className="main-wrap relative z-10 min-h-screen" 
        style={{ 
          backgroundImage: `url(${NightImage})`, 
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >

        {/* Hero Section */}
        <div className="hero min-h-screen relative bg-transparent">
          <div className="absolute inset-0"></div>
          <div className="hero-content text-center text-neutral-content relative z-10 flex items-center justify-center px-4 md:px-0">
            <div className="relative w-full max-w-3xl bg-opacity-75 p-8 md:p-20 rounded-lg shadow-2xl overflow-hidden">
              <div className="relative z-10">
                <h1 className="mb-5 text-5xl md:text-6xl font-bold text-white libre-baskerville-bold">Ian Sabado</h1>
                <p className="mb-5 text-2xl md:text-3xl text-white libre-baskerville-regular">Software Engineer <br /> San Francisco Bay Area</p>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section Ends */}
        
        {/* About Section */}
        <About />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />
      </div>

      {/* Additional Styles for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .main-wrap {
            background-position: top; /* Different perspective on mobile */
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
