import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Globe from './Globe';

const Layout = ({ children }) => {
  const location = useLocation();
  const [shrinkGlobe] = useState(false);

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto bg-black flex flex-col justify-between text-white">
      {/* Le Globe est maintenant ici et sera partagé entre toutes les pages */}
      <div className={`absolute flex flex-row justify-center  w-full z-20 transition-all duration-500 
        ${location.pathname === '/about' ? 'translate-x-[35%] -translate-y-24 ' : location.pathname === '/' ? '' : location.pathname==='/explore'?'hidden':'hidden'}`}>
        <Globe shrink={shrinkGlobe} />
      </div>
      {/* Le contenu des pages sera rendu ici */}
      {children}
    </div>
  );
};

export default Layout; 