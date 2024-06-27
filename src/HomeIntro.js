import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/site-intro.json';
import { useState, useEffect } from 'react';

export default function HomeIntro() {
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
      <div id='bg-effect'>
          {isVisible ? (
          <Lottie 
            options={defaultOptions}
            height={window.innerWidth <= 768 ? 750 : 700}
            width={window.innerWidth <= 768 ? 400 : 800}
            />
          ) : null}
            
    </div>
  );
}
