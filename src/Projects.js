import React from "react";
import BarblendImage from './assets/barblend.png';
import Fontastic from './assets/fontastic-home.jpeg';

const projects = [
  { title: 'Fontastic', description: 'Input text and have it appear on your screen in full size. Communicate non-verbally to your friends across the room! Stack: React Native | Lottie files', link: '#', image: Fontastic },
  { title: 'BarBlend Guru', description: 'Lookup cocktail recipes and get drink suggestions by utilizing this web app. Stack: Next JS | Tailwind CSS | Rest API', link: '#', image: BarblendImage },
  { title: 'Project 3', description: 'Description for project 3', link: '#', image: 'https://via.placeholder.com/400' },
  { title: 'Project 4', description: 'Description for project 4', link: '#', image: 'https://via.placeholder.com/400' },
];

const ProjectCard = ({ title, description, link, image }) => (
  <div className="relative p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
    <img src={image} alt={title} className="w-full h-auto object-cover rounded-md mb-4" style={{ width: '400px', height: '400px' }} />
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <div className="absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300">Check it out</a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white py-10 px-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-center mb-10">My Projects</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full max-w-4xl">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
            image={project.image} 
          />
        ))}
      </div>
    </div>
  );
}
