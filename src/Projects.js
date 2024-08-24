import React from "react";
import BarblendImage from './assets/barblend.png';
import Fontastic from './assets/fontastic-image.png';
import JSDrumkit from './assets/JS-Drumkit.png';
import NightImage from './assets/bannerNight.png';

const projects = [
  {
    title: 'Fontastic', description: 'Input text and have it appear on your screen in full size. Communicate non-verbally to your friends across the room! NOTE: This is a mobile app, it can be previewed using "Expo Go" More info in then link below', stack: 'React Native | Tailwind CSS | Expo | Lottie files', link: 'https://expo.dev/preview/update?message=making%20expo%20work&updateRuntimeVersion=1.0.0&createdAt=2024-08-23T05%3A31%3A14.578Z&slug=exp&projectId=46bb1139-8352-4631-b16b-7e1ec8b80edb&group=84124715-5c26-4718-b4d2-cd3b5dbdf770', image: Fontastic
  },
  {
    title: 'BarBlend Guru', description: 'Lookup cocktail recipes and get drink suggestions by utilizing this web app.', stack: 'React | Next JS | Tailwind CSS | Rest API | AWS Cloud Services', link: 'https://main.d2e1ldx3lbiju.amplifyapp.com/', image: BarblendImage
  },
  {
    title: 'Javascript Drumkit', description: 'Use your computer keyboard as a drumkit', stack: 'JavaScript, HTML, CSS', link: 'https://mriansabado.github.io/javaScript-drumkit/', image: JSDrumkit
  }
];

const ProjectCard = ({ title, description, stack, link, image }) => (
  <div className="relative p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
    <img src={image} alt={title} className="w-full h-auto object-cover rounded-md mb-4" style={{ width: '400px', height: '400px' }} />
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <div className="absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-700 mb-4">{stack}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300">Check it out</a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r py-10 px-5 flex flex-col items-center justify-center"
    style={{ 
          backgroundImage: `url(${NightImage})`, 
          backgroundSize: "fill", 
          backgroundPosition: "top" 
        }}>
      <h1 className="text-4xl font-extrabold text-center mb-10 text-white">Projects</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description}
            stack={project.stack}
            link={project.link} 
            image={project.image} 
          />
        ))}
      </div>
    </div>
  );
}
