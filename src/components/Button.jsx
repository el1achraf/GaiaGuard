const Button = () => {
  return (
    <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-8   z-20 flex items-center justify-center group  cursor-pointer">
      <div className="relative w-28 h-28   flex items-center justify-center">
        <img src="/Startrail.png"  className="absolute w-full h-full animate-[spin_5s_linear_infinite_reverse]" />
       <button className="absolute text-white text-sm tracking-wider font-light uppercase  group-hover:duration-500 group-hover:text-xs duration-500  ">Activate</button>
      </div>
    </div>
  );
};

export default Button;
