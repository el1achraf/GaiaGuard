import { useState, useEffect } from 'react';
import Globe from './components/Globe';
import Button from "./components/Button"
import Menu from "./components/Menu";
import Loading from "./components/Loading";
import Stars from "./components/Stars";
import Blog from "./components/Blog"; 
import { Typewriter } from 'react-simple-typewriter';


function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Augmentation du délai à 5 secondes
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Attendez que votre modèle soit chargé ici
        // await yourModelLoadingFunction();
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading model:', error);
        setIsLoading(false);
      }
    };

    loadModel();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#020C1B] flex flex-col justify-between  text-white" >
    <Stars />
      <div className="absolute z-50">
        <Menu />
      </div>
      <p className="font-orbitron tracking-widest w-full text-center font-extralight  absolute  top-[15%] lg:top-[14%]  ">
                
                <Typewriter
        words={['An Eye on the Future of the Earth']}

        typeSpeed={100}  // Vitesse d’écriture (ms)
        cursor={false}  // Supprime le curseur clignotant
      />
              </p>
      <h1 className='w-full font-Staatliches  text-center tracking-wider absolute z-10 top-[24%] lg:top-[30%] translate-y-[-50%] text-[5rem] lg:text-[250px] animate-slideDown opacity-0'>
        GaiaGuard
      </h1>

      {<div className="flex flex-row justify-center relative z-20 ">
        {isVisible && <Globe className="" />}
      
   
      </div>}
      <Button setIsVisible={setIsVisible} />
      <Blog />
      
      <footer className="mt-0 lg:mt-0 w-full py-4 text-center text-sm z-30">

        <p>&copy; {new Date().getFullYear()} GaiaGuard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
