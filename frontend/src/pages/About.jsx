import Menu from "../components/Menu";
import Stars from '../components/Stars';
import Blog from '../components/Blog'
import Button from '../components/Button'
import { useState,useEffect } from "react";

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const title1 = "YESTERDAY";
  const title2 = "TOMORROW";
  const title3 = "TODAY";
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
    };
  }, []); 
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-between text-white">
      <Stars />
      <div className="absolute z-50">
        <Menu />
      </div>
     {showButton && <> <div className="absolute w-[10.9em] right-[20rem] top-[20%]">
  <span className={`absolute right-0 bg-[#ffffff] h-0.5 origin-left transition-all duration-1000 ease-in-out z-index ${showButton ? 'w-full' : 'w-0'}`}></span>
  <div className="absolute mt-[66px]">
    <Button image="/icons/volcano.png" />
  </div>
</div>

<div className="absolute w-[18.9em] right-[20rem] top-[50%]">
  <span className={`absolute right-0 bg-[#ffffff] h-0.5 origin-left transition-all duration-1000 ease-in-out ${showButton ? 'w-full' : 'w-0'}`}></span>
  <div className="absolute mt-[66px]">
    <Button image="/icons/earthquakeWB.png" />
  </div>
</div>

<div className="absolute w-[10.9em] right-[20rem] bottom-[20%]">
  <span className={`absolute right-0 bg-[#ffffff] h-0.5 origin-left transition-all duration-1000 ease-in-out ${showButton ? 'w-full' : 'w-0'}`}></span>
  <div className="absolute mt-[66px]">
    <Button image="/icons/tornado.png" />
  </div>
</div>
</>}
    {showContent && <div className="absolute left-[60px] top-[26%] flex flex-col items-start z-30 w-[40.9em] h-[30em] animate-back-in-down " >
      <span className="absolute h-0.5 w-40 bg-[#C0C0C0] w"></span>
     <h1 className="text-[#C0C0C0] font-Staatliches ml-1  tracking-wider  ">About </h1>
     <span className="absolute top-5 h-0.5 w-full bg-[#C0C0C0]"></span>
     <div className="font-orbitron text-xl space-y-2 ml-0.5">
  <p>
    THIS EXPERIENCE IS BROUGHT TO YOU BY 
    <span className="mx-2 font-bold font-orbitron text-xl tracking-[1px] px-1 bg-white text-black">
      GAIAGUARD
    </span>
  </p>

  <p>
    A PLATFORM DEDICATED TO ANALYZING THE PAST AND 
  </p>
  <p>PREDICTING THE FUTURE OF NATURAL DISASTERS.</p>
</div>

     <span className="absolute top-[125px] h-0.5 w-full bg-[#C0C0C0]"></span>
     <div></div>
     <span className="absolute top-[125px] h-[12.5rem] left-1/2 w-0.5 bg-[#C0C0C0]"></span>
     <div className="w-full flex ">
     <div className="w-1/2">
     <div className="flex justify-between  items-center h-[12.5rem] font-Staatliches ">
      <span className="uppercase">
      Understand
      </span>
      <div className="flex flex-col items-center px-1 py-0.5 -space-y-3 bg-white border-4 border-black">
        {title1.split('').map((letter, index) => (
          <span
            key={index}
            className="text-sm md:text-lg font-bold text-black"
          >
            {letter}
          </span>
        ))}
      </div>
      <span className="uppercase">Predict </span>
      <div className="flex flex-col items-center px-1 py-0.5 -space-y-3 bg-white border-4 border-black">
        {title2.split('').map((letter, index) => (
          <span
            key={index}
            className="text-sm md:text-lg font-bold text-black"
          >
            {letter}
          </span>
        ))}
      </div>
      <span className="uppercase">
      Protect
      </span>
      <div className="flex flex-col items-center px-1 py-0.5 -space-y-3 bg-white border-4 border-black">
        {title3.split('').map((letter, index) => (
          <span
            key={index}
            className="text-sm md:text-lg font-bold text-black"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
     </div>
     <div className=" w-1/2 ml-3 mt-1.5 ">
      <p className="font-Staatliches"><span className=" font-bold font-orbitron text-sm tracking-[1px] px-1 bg-white text-black">GAIAGARD</span> bridges the wisdom of the past with the foresight of tomorrow.Harnessing the power of AI, including ConvLSTM, we decode Earth's silent stories — from ancient disasters to the whispers of emerging threats.

Our dream is a world where technology and nature walk hand in hand, where every lesson learned shapes a safer, more resilient future for all.</p>
     </div>
     </div>
   

     </div>}
     {/* { <div className="absolute left-20 top-[20%] flex flex-col items-start z-30">
        <span className="absolute font-Staatliches text-[8rem] leading-none tracking-wider text-white">
          Gaia
        </span>
        <span className="absolute top-24 font-Staatliches text-[8rem] leading-none tracking-wider text-white">
          Guard
        </span>
      </div>} */}
      {/* Contenu de la page About */}
 
<div className="absolute w-full top-[40rem] ">
<Blog />
</div>
    </div>
  );
};

export default About;
