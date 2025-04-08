import Menu from "../components/Menu";
import Stars from "../components/Stars";
import { useState } from "react";
import Past from "../components/Past";
import Future from "../components/Future";
import { AnimatePresence, motion } from "framer-motion";

const Explore = () => {
  const [IsChanged, setIsChanged] = useState(true);
  

  const HandleChangeTime = () => {
    setIsChanged(!IsChanged);
  };

  const variants = {
    initial: (direction) => ({
      x: direction === "past" ? "-100%" : "100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction === "past" ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <div className="relative min-h-screen bg-black bg-cover bg-center flex flex-col justify-between text-white overflow-hidden">
      <Stars />

      <div className="absolute z-50">
        <Menu />
      </div>

      <div className="relative flex-1">
        <AnimatePresence custom={IsChanged ? "past" : "future"} mode="wait">
          <motion.div
            key={IsChanged ? "past" : "future"}
            custom={IsChanged ? "past" : "future"}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full h-full"
          >
            {IsChanged ? <Past /> : <Future />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 z-20 flex w-full px-4 ${
          IsChanged ? "justify-end" : "justify-start"
        }`}
      >
        <button
          onClick={HandleChangeTime}
          className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 border border-white rounded-full hover:bg-opacity-30 transition duration-300"
        >
          {IsChanged ? (
            <>
              <span className="text-xl">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-xl">Back</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Explore;
