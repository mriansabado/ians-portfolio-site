import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/background.json';
import { useState, useEffect } from 'react';

export default function Background() {
    const [isVisible, setVisible] = useState(true);

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
            height={window.innerWidth <= 768 ? 800 : 850}
            width={window.innerWidth <= 768 ? 400 : 1480}
            />
          ) : null}
            
    </div>
  );
}
