/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";

import { useRef } from "react";
import {  useMemo } from "react";

import * as THREE from "three";





// ✅ Composant pour afficher un effet d'étoiles statique avec scintillement
const StaticStars = () => {
  const numStars = 50000;
  const starsRef = useRef();
  const positions = useMemo(() => {
    const posArray = new Float32Array(numStars * 3);
    for (let i = 0; i < numStars; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 400;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 400;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 400;
    }
    return posArray;
  }, []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Rotation de l'ensemble des étoiles sur l'axe Y
      starsRef.current.rotation.y += 0.001;
      // Effet de scintillement sur l'opacité
      starsRef.current.material.opacity = 1.0 + 0.6 * Math.sin(clock.getElapsedTime() * 3);
    }
  });
  return (
    <points ref={starsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={numStars}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.001} 
        color={"#ffffff"} 
        opacity={1}
        sizeAttenuation={true}
        transparent 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};



const Stars = () => {
  return (
    <Canvas
      style={{
    
        background: "transparent",
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100%',
        height: '100%' // Bleu spatial plus profond
      }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
    
      <StaticStars />
      

      
    </Canvas>
  );
};

export default Stars;
