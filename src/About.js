import React from "react";
import Profile from './assets/profile-photo.jpg';

export default function About() {

    return (
        <>
    <section className="bg-gray-900 text-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3" style={{ height: '456px', width: '400px' }}> {/* Adjust image height here */}
            <img src={Profile} alt="Your Image" className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
          </div>
          <div className="w-full md:w-2/3 p-8">
            <h2 className="text-4xl font-bold mb-4 border-b-2 border-teal-400 inline-block">About Me</h2>
            <p className="text-lg mb-4 leading-relaxed">
                  Hi! I'm <span className="text-teal-400">Ian Sabado</span>, a Software Engineer residing in the San Francisco Bay area. I have a passion for making beautiful websites and applications. With a knack for turning ideas into engaging user experiences, I love exploring new technologies and continuously learning. When I'm not coding, you can find me hiking the local trails, experimenting with new recipes in the kitchen, or catching up on the latest tech trends. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>


        </>
    )
}