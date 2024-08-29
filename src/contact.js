import React from 'react';
import NightImage from './assets/bannerNight.png';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-0"
      style={{ 
          backgroundImage: `url(${NightImage})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}>
      <div className="w-full max-w-3xl bg-opacity-80 p-8 md:p-12 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Contact</h1>
        <div className="w-full mt-6 space-y-4 text-lg md:text-xl font-medium">
          <p>Email: <a href="mriansabado@gmail.com" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">mriansabado@gmail.com</a></p>
          <p>LeetCode: <a href="https://leetcode.com/u/mriansabado/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">https://leetcode.com/u/mriansabado/</a></p>
          <p>GitHub: <a href="https://github.com/mriansabado" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">https://github.com/mriansabado</a></p>
          <p>AWS Certification: <a href="https://www.credly.com/badges/8eca1b4f-432d-4479-8799-6236b526cc4f/email" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">AWS Certification Link</a></p>
           <p>LinkedIn: <a href="https://www.linkedin.com/in/ian-sabado-658828b2/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">https://www.linkedin.com/in/ian-sabado-658828b2/</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
