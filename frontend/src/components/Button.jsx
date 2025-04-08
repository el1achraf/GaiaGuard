const Button = ({ text = "Start", image = null, onClick, isPuffing = false }) => {
  return (
    <div className="absolute w-24 h-24 bottom-[55px] lg:bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center group cursor-pointer">
      <div className="relative w-24 h-24 flex items-center justify-center scale-0 animate-scale-in">
        <img src="/Startrail.png" className="absolute w-full h-full animate-[spin_5s_linear_infinite_reverse]" />
        <button
          onClick={onClick}
          className="absolute flex items-center justify-center text-white text-[16px] tracking-wider font-light uppercase group-hover:duration-500 group-hover:text-xs duration-500"
        >
          {image ? (
            <img src={image} alt="button-icon" className="w-16 h-16" />
          ) : (
            text
          )}
        </button>
      </div>
    </div>
  );
};

export default Button;
