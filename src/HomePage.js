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
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Cover the entire area
          backgroundPosition: "center", // Center the image
          backgroundAttachment: "fixed", // Keeps the background fixed on desktop
        }}
      >

        {/* Hero Section */}
        <div className="hero min-h-screen relative bg-transparent flex items-center justify-center">
          <div className="relative w-full max-w-3xl bg-opacity-75 p-8 md:p-20 rounded-lg shadow-2xl overflow-hidden">
            <div className="relative z-10 text-center text-neutral-content">
              <h1 className="mb-5 text-5xl md:text-6xl font-bold text-white libre-baskerville-bold">Ian Sabado</h1>
              <p className="mb-5 text-2xl md:text-3xl text-white libre-baskerville-regular">
                Software Engineer <br /> San Francisco Bay Area
              </p>
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
            background-attachment: scroll; /* Allow the background to scroll with content on mobile */
            background-position: center top; /* Adjust the position for mobile */
            background-size: cover; /* Ensure the background still covers the area */
          }

          .hero-content {
            padding: 16px; /* Adjust padding for smaller screens */
          }

          h1 {
            font-size: 2.5rem; /* Adjust font size for smaller screens */
          }

          p {
            font-size: 1.25rem; /* Adjust font size for smaller screens */
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
