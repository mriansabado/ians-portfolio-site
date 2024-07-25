import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/gradient-animation-2.json';

export default function Background() {
  const [isVisible, setVisible] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: window.innerWidth <= 768 ? 800 : 850,
    width: window.innerWidth <= 768 ? 500 : 1800
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerWidth <= 768 ? 800 : 850,
        width: window.innerWidth <= 768 ? 500 : 1800
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="bg-effect" className="w-full h-full flex items-center justify-center">
      {isVisible ? (
        <Lottie 
          options={defaultOptions}
          height={dimensions.height}
          width={dimensions.width}
        />
      ) : null}
    </div>
  );
}
