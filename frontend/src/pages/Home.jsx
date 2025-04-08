import { useState } from 'react';

import Button from "../components/Button";
import Stars from "../components/Stars";

import { Typewriter } from 'react-simple-typewriter';
import Menu from '../components/Menu';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPuffing, setIsPuffing] = useState(false); // ⬅️ Nouveau state
 
  const handleStart = () => {
    // Start puff-out effect
    setIsPuffing(true);
 
    // After animation duration, hide them
    setTimeout(() => {
      setIsVisible(false);
    }, 700); // Same as puff duration
  };



  return (
    <div className="min-h-screen bg-black flex flex-col justify-between text-white">
      <Stars />
      <div className="absolute z-50">
        <Menu />
      </div>
      {isVisible && (
        <>
          <p className={`${isPuffing ? 'animate-blur-out-fwd' : ''} font-orbitron tracking-widest w-full text-center font-extralight absolute text-[0.8rem] sm:text-[1rem] top-[16.1%] sm:top-[15%] lg:top-[16%] xl:top-[14%]`}>
            <Typewriter
              words={['An Eye on the Future of the Earth']}
              typeSpeed={100}
              cursor={false}
            />
          </p>
          <h1 className={`${isPuffing ? 'animate-blur-out-expand-fwd' : ''} w-full font-Staatliches text-center tracking-wider absolute z-10 top-[24%] lg:top-[28.5%] xl:top-[30%] translate-y-[-50%] text-[5.5rem] sm:text-[6.5rem] lg:text-[10rem] xl:text-[250px] `}>
            GaiaGuard
          </h1>
        </>
      )}
      {isVisible && (
  <Button
    onClick={handleStart}
    isPuffing={isPuffing}
  />
)}


     
     {/* { <footer className="mt-0 lg:mt-0 w-full py-4 text-center text-sm z-30">
        <p>&copy; {new Date().getFullYear()} GaiaGuard. All rights reserved.</p>
      </footer>} */}
    </div>
  );
};

export default Home;
