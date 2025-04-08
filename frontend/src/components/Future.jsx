import Button from "./Button";
import Holograme from "./Holograme";
import { useState,useEffect } from "react";

const Future = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimated(true); // بعد delay، نخليها تبدا الأنميشن
      }, 1600); // قدّر الوقت اللي بغيتي (مثلاً 700ms)
  
      return () => clearTimeout(timer); // cleanup
    }, []);
      
  return (
    <div className="relative min-h-screen bg-transparent  flex flex-col justify-between text-white overflow-hidden">
      
      <div className="absolute flex flex-col items-center w-full pt-20 ">
        <h1 className="text-8xl font-Staatliches ">THE FUTURE</h1>
     
{
  isAnimated &&<>   <div className="absolute left-[38.35em] top-[9em] flex justify-between gap-2 w-[2.35em]  h-[10rem]  ">
          
          
  {/* خط طويل قد النص */}
  <span className="ml-[0.5px] block w-[12px] mr-[1px]  bg-white animate-grow"></span>

  <span className="block  w-[11.5px] bg-white animate-grow"></span>
</div>
   <div className="absolute right-[38.55em] top-[9em] flex justify-between gap-2 w-[2.39em]  h-[10rem]  ">
          
          
  {/* خط طويل قد النص */}
  <span className="ml-[0.5px] block w-[12px] mr-[1px]  bg-white animate-grow"></span>

  <span className="block  w-[11.5px]  bg-white animate-grow"></span>
</div>
</>
}

    

      </div>
      <Button image="../../public/falarm.png" />
      {/* Bloc central */}
      <div className="flex justify-center items-center flex-1 relative z-10">
        <Holograme />
      </div>
    </div>
  );
};

export default Future;
