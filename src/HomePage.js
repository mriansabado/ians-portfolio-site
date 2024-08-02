import React from 'react';
import HomeIntro from './HomeIntro.js';
import Background from './Background-Effect';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './contact.js';

const HomePage = () => {
  return (
    <>
      <div className='main-wrap'>
        {/* Hero Section */}
        <div className="hero min-h-screen relative bg-gradient-to-r from-blue-900 via-purple-900 to-black">
          <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
          <div className="hero-content text-center text-neutral-content relative z-10 flex items-center justify-center px-4 md:px-0">
            <div className="relative w-full max-w-3xl bg-opacity-75 p-8 md:p-20 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Background />
              </div>
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
    </>
  );
};

export default HomePage;
