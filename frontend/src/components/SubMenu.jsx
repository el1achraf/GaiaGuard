import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, x: -20 }, // Effet de slide-in
  visible: (i) => ({
    opacity: 1,
    x: 0, // Suppression du décalage pour une meilleure structure
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

// eslint-disable-next-line react/prop-types
const SubMenu = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Explore", path: "/explore" },
    { text: "About", path: "/about" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Ferme le menu après la navigation
  };

  return (
    <div
    className={`fixed w-full  top-0 lg:left-0 h-24 lg:h-screen z-40 py-1 lg:py-0 lg:bg-opacity-90 flex flex-col justify-end lg:justify-center  transition-all duration-500 ${
      isOpen ? "h-[9rem] lg:w-1/2 bg-black" : "h-0 lg:w-0 overflow-hidden bg-transparent"
    }`}
    >
      <div className="flex flex-col space-y-0 lg:space-y-6 transition-all duration-700 lg:px-6 w-full">
        {menuItems.map((item, i) => (
          <motion.div
            key={item.text}
            className={`flex items-center justify-between w-full group   ${
              i === 1 ? " ml-10 lg:ml-36" : "ml-10 lg:ml-20" // Appliquer ml-10 seulement à Explore
            }`}
            variants={variants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="hidden"
            custom={i}
            onClick={() => handleNavigation(item.path)}
          >
            <h1 className="text-xl lg:text-9xl font-Staatliches cursor-pointer ">
              {item.text}
              <FontAwesomeIcon
              icon={faArrowRight}
              className={` text-white hidden lg:inline  lg:text-6xl absolute lg:mt-8 lg:ml-8 w-0 group-hover:w-32 group-hover:duration-500
                font-bold`}
            />
            </h1>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
