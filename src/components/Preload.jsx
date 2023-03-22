import React, { useState, useEffect } from 'react';
import '../assets/App.css';

function PreloadScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return prevProgress;
        } else {
          return prevProgress + 1;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preload-screen">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="loading-text">{`Loading ${progress}%`}</div>
    </div>
  );
}

export default PreloadScreen;

