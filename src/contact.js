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
          <p>Email: <a href="mailto:your-email@example.com" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">your-email@example.com</a></p>
          <p>LeetCode: <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">https://leetcode.com/your-username</a></p>
          <p>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">https://github.com/your-username</a></p>
          <p>AWS Certification: <a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=your-certification-id" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors duration-200">AWS Certification Link</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
