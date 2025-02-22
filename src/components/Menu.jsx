import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faList } from "@fortawesome/free-solid-svg-icons"; 
import SubMenu from "./SubMenu"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-start ">
      {/* Icône qui change en fonction de l'état */}
     
      <div className="w-28 h-[55px] text-start mx-12 my-9 fixed z-50 group cursor-pointer animate-slide-left">

<div className="relative ">
<button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl transition-transform duration-300"
      >
        <FontAwesomeIcon icon={isOpen ? faBars : faList} />
      </button>

<div className="   flex flex-col items-start font-Staatliches absolute left-[21px] top-4 group-hover:left-[30px] group-hover:top-6 group-hover:duration-300 ">
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
