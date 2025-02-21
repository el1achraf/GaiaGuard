import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const variants = {
  hidden: { opacity: 0, x: -20 }, // Effet de slide-in
  visible: (i) => ({
    opacity: 1,
    x: 0, // Suppression du décalage pour une meilleure structure
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

// eslint-disable-next-line react/prop-types
const SubMenu = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-black z-40 bg-opacity-90 flex flex-col justify-center transition-all duration-500 ${
        isOpen ? "w-1/2" : "w-0 overflow-hidden"
      }`}
    >
      <div className="flex flex-col space-y-6 transition-all duration-700 px-6 w-full">
        {["Home", "Explore", "About"].map((text, i) => (
          <motion.div
            key={text}
            className={`flex items-center justify-between w-full group   ${
              i === 1 ? "ml-36" : "ml-20" // Appliquer ml-10 seulement à Explore
            }`}
            variants={variants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="hidden"
            custom={i}
          >
            <h1 className="text-6xl md:text-9xl font-Staatliches cursor-pointer ">
              {text}
              <FontAwesomeIcon
              icon={faArrowRight}
              className={`text-white text-6xl absolute mt-8 ml-8 w-0 group-hover:w-32 group-hover:duration-500
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
