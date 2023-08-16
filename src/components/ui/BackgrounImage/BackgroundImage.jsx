import React, { useState, useEffect } from 'react';
import './BackgroundImage.css'; // Import the CSS file with the styles

const BackgroundImage = (props) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth > 768); // Adjust the breakpoint as per your requirement
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={showBackground ? 'background-image' : 'white-background'}
    ></div>
  );
};

export default BackgroundImage;
