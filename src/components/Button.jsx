const Button = () => {
 

  return (
    <div className="absolute w-24 h-24 bottom-[55px] lg:-bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-5 z-20 flex items-center justify-center group cursor-pointer opacity-0 animate-slideUp">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <img src="/Startrail.png" className="absolute w-full h-full animate-[spin_5s_linear_infinite_reverse]" />
        <button className="absolute text-white text-[15px] tracking-wider font-light uppercase group-hover:duration-500 group-hover:text-xs duration-500">
          Activate
        </button>
      </div>
    </div>
  );
};

export default Button;
