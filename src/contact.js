import React from 'react';
import BannerNight from './assets/bannerNight.png';

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${BannerNight})` }}
    >
      <div className="w-full max-w-4xl bg-opacity-75 p-10 md:p-16 rounded-lg shadow-2xl flex flex-col items-center justify-center relative text-center">
        <div className="relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Contact</h1>
          <ul className="text-lg space-y-4">
            <li><strong>Email:</strong> yourname@gmail.com</li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-linkedin" className="text-blue-300 hover:underline">linkedin.com/in/your-linkedin</a></li>
            <li><strong>LeetCode:</strong> <a href="https://leetcode.com/your-profile" className="text-blue-300 hover:underline">leetcode.com/your-profile</a></li>
            <li><strong>AWS Certification:</strong> <a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=your-cert-link" className="text-blue-300 hover:underline">AWS Certification Link</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
