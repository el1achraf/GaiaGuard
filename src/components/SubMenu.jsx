import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: -20 }, // Ajout d'un décalage horizontal pour un effet de slide-in
  visible: (i) => ({
    opacity: 1,
    
    x: i === 1 ? 220 : 140, // Ajout de ml-14 (ml-14 = 56px en Tailwind)
    transition: { delay: i * 0.5, duration: 0.5 }, // Délai progressif
  }),
};


// eslint-disable-next-line react/prop-types
const SubMenu = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-screen bg-black z-40 bg-opacity-90 flex flex-col justify-center transition-all duration-500 ${isOpen ? "w-1/2" : "w-0 overflow-hidden"}`}>
      <div className={`  flex flex-col items-start space-y-4 ${isOpen ? "  transition-all duration-700" : "ml-0"}`}>
        {["Home", "Explore", "About"].map((text, i) => (
        <motion.h1
        key={text}
        className="text-9xl font-Staatliches cursor-pointer inline-block px-4 relative 
                   before:content-[''] before:absolute before:top-1/2 before:right-full before:h-[4px] before:bg-white before:w-0 hover:before:w-[100px] before:transition-all before:duration-300 
                   after:content-[''] after:absolute after:top-1/2 after:left-full after:h-[4px] after:bg-white after:w-0 hover:after:w-[100px] after:transition-all after:duration-300"
        variants={variants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="hidden"
        custom={i}
      >
        {text}
      </motion.h1>
      
      
       
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
