import React from "react";

const projects = [
  { title: 'Fontastic', description: 'A React Native app', link: '#', image: 'https://via.placeholder.com/400' },
  { title: 'Project 2', description: 'Description for project 2', link: '#', image: 'https://via.placeholder.com/400' },
  { title: 'Project 3', description: 'Description for project 3', link: '#', image: 'https://via.placeholder.com/400' },
  { title: 'Project 4', description: 'Description for project 4', link: '#', image: 'https://via.placeholder.com/400' },
];

const ProjectCard = ({ title, description, link, image }) => (
  <div className="p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg flex flex-col justify-between transform hover:scale-102 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-auto object-cover rounded-md mb-4" style={{ width: '400px', height: '400px' }} />
    <div>
      <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
    <a href={link} className="mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300">Check it out</a>
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white py-10 px-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
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
    </div>
  );
}
