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
      <div className="main-wrap relative z-10 min-h-screen">
        {/* Hero Section */}
        <div 
          className="hero min-h-screen relative flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${NightImage})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll",
          }}
        >
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

      {/* Additional Styles for Mobile and Desktop */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .hero {
            background-size: cover !important;
            background-position: center !important;
            background-attachment: fixed !important;
          }
        }

        @media (max-width: 768px) {
          .hero {
            background-attachment: scroll;
            background-position: center;
            background-size: 90%;
          }

          .main-wrap {
            background-attachment: scroll;
            background-position: center;
            background-size: cover;
          }

          .hero {
            min-height: 100vh;
            padding: 0 16px;
          }

          h1 {
            font-size: 2.5rem;
          }

          p {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }

          .hero-content {
            padding: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
