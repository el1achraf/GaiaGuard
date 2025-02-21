export default function Loading() {
  return (
   
      <div  className="fixed inset-0 flex items-center justify-center bg-[#0a192f]">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <img src="/Startrail.png" className="absolute w-full h-full animate-[spin_5s_linear_infinite_reverse]" />
        <button className="absolute text-white text-[15px] tracking-wider font-light uppercase group-hover:duration-500 group-hover:text-xs duration-500">
          Loading
        </button>
      </div>
    </div>

  );
} 