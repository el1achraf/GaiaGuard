import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faList } from "@fortawesome/free-solid-svg-icons"; 
import SubMenu from "./SubMenu"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full  flex justify-start ">
      {/* Icône qui change en fonction de l'état */}
     
      <div className={`w-full lg:w-28 px-4 h-auto text-start lg:mx-12 lg:my-9 fixed  group cursor-pointer animate-slide-left lg:bg-transparent z-50 ${isOpen ? "bg-black":"bg-transparent"} `}>

<div className="lg:relative ">
<button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-3 left-4 lg:top-0 lg:left-0 text-2xl lg:text-xl transition-transform duration-300"
      >
        <FontAwesomeIcon icon={isOpen ? faBars : faList} />
      </button>

<div className="flex flex-col items-start font-Staatliches absolute right-4 top-3 lg:left-[21px] lg:top-4 lg:group-hover:left-[30px] lg:group-hover:top-6 lg:group-hover:duration-300 ">
  <span className=" ">Gaia</span> 
  <span className="relative -top-3">Guard</span>
</div>
</div>
</div>
    <SubMenu isOpen={isOpen}/>
     
    </div>
  );
};

export default Menu;
