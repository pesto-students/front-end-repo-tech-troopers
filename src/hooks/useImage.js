import React, { useState, useEffect } from 'react';

const useBackgroundImage = (imageUrl) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: `url(${imageUrl})`,
  });

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      if (
        window.innerWidth <= 500
        && backgroundStyle.backgroundColor !== 'white'
      ) {
        setBackgroundStyle({
          backgroundColor: 'white',
        });
      } else if (!backgroundStyle.backgroundColor) {
        setBackgroundStyle({
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100vh',
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (window.innerWidth <= 500) {
    // If window width is less than or equal to 500px, set background color to white
    setBackgroundStyle({
      backgroundColor: 'white',
    });
    // backgroundStyle.backgroundColor = 'white';
  }

  return backgroundStyle;
};

export default useBackgroundImage;
