import React from 'react';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './contact.js';
import './assets/Background.css'; // Make sure to create this CSS file

const HomePage = () => {
  return (
    <>
      {/* Background Effect */}
      <div id="bg-effect" className="absolute top-0 left-0 w-full h-full z-0"></div>

      <div className='main-wrap relative z-10'>
        {/* Hero Section */}
        <div className="hero min-h-screen relative bg-transparent">
          <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
          <div className="hero-content text-center text-neutral-content relative z-10 flex items-center justify-center px-4 md:px-0">
            <div className="relative w-full max-w-3xl bg-opacity-75 p-8 md:p-20 rounded-lg shadow-lg overflow-hidden">
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
