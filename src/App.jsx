import { useState } from 'react';
import Globe from './components/Globe';
import Button from "./components/Button"
import Menu from "./components/Menu";
import EarthHologram from "./components/EarthHologram";
import Blog from "./components/Blog";


function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#020C1B]  text-white" >
    
    <div className="absolute z-50">
        <Menu />
      </div>
      <p className="font-orbitron tracking-widest w-full text-center font-extralight  absolute z-50 top-[14%]  ">
              Un Œil sur l&apos;Avenir de la Terre
            </p>
      <h1 className='w-full font-Staatliches text-center tracking-wider absolute z-10 top-[30%] translate-y-[-50%] text-[250px] '>
        GaiaGuard
      </h1>

      <div className="flex flex-row justify-center relative z-20 ">
        {isVisible && <Globe className="" />}
        {!isVisible && <EarthHologram />}
   
      </div>
      <Button setIsVisible={setIsVisible} />
      <Blog />
    
    </div>
  );
}

export default App;
