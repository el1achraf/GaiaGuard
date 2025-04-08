import { useState,useEffect } from "react";
import Book from "../components/Book"; // نستورد الكتاب هنا
import Button from "../components/Button";

const Past = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); // بعد delay، نخليها تبدا الأنميشن
    }, 1600); // قدّر الوقت اللي بغيتي (مثلاً 700ms)

    return () => clearTimeout(timer); // cleanup
  }, []);
    
  return (
    <div className="relative min-h-screen bg-transparent flex flex-col justify-between text-white overflow-hidden">
     
      <div className="absolute flex flex-col items-center w-full pt-20 ">
        <h1 className="text-8xl font-Staatliches ">THE PAST</h1>
     {
        isAnimated &&  <div className="absolute top-[8em]  flex justify-between gap-2 w-[17em] h-[10rem] pr-0.5 ">
        <span className="ml-[0.5px] block w-[12px] mr-[1px] bg-white animate-grow delay-500 "></span>
        <span className="block w-[11.5px] mb-[5.5rem] bg-white animate-Secondegrow delay-500  "></span>
        <span className="block w-[11.5px] bg-white animate-grow delay-1000  "></span>
      </div>
     }  


      </div>
      <Button image="../../public/balarm.png" />
      {/* Bloc central */}
      <div className="flex justify-center items-center flex-1 relative z-10">
        <Book />
      </div>
    </div>
  );
};

export default Past;
