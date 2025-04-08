import React, { useState } from 'react';
import Scene from './Scene';
import Globe from './Globe';

function AboutButton() {
  const [isAboutView, setIsAboutView] = useState(false);

  const handleAboutClick = () => {
    setIsAboutView(!isAboutView);
  };

  return (
    <>
      <button onClick={handleAboutClick}>
        About
      </button>
      <Scene isAboutView={isAboutView}>
        <Globe isAboutView={isAboutView} />
      </Scene>
    </>
  );
}

export default AboutButton; 