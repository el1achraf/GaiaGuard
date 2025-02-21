/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import {  useMemo } from "react";

import * as THREE from "three";



// ✅ Composant pour charger le modèle du Globe
const GlobeModel = () => {
  const { scene } = useGLTF("/models/nglobe.glb");
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      // Rotation lente autour de l'axe Y
      globeRef.current.rotation.y -= 0.008;
    }
  });
  
  return (
    <primitive
      ref={globeRef}
      object={scene}
      scale={[4.5	, 4.5, 4.5]}
      position={[0, -1.6, 0]}
      rotation={[0, -Math.PI / 1.68, 0]} // ✅ Tourne la Terre vers l'Afrique
    />
  );
};
// ✅ Composant pour afficher un effet d'étoiles statique

// ✅ Composant pour afficher un effet d'étoiles statique avec scintillement
const StaticStars = () => {
  const numStars = 25000;
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
      starsRef.current.material.opacity = 0.8 + 0.5* Math.sin(clock.getElapsedTime() * 2); // Scintillement des étoiles
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
        size={0.1} 
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


// ✅ Composant principal de la scène
const Globe = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent", // Bleu spatial plus profond
      }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      {/* Lumières pour le Globe */}
     
      <ambientLight intensity={1.5} />
   
      
      <pointLight position={[0, 0, 10]} intensity={12} color={"#99bbff"} />

      {/* ✅ Ajout des étoiles animées avec effet de scintillement */}
      <StaticStars />
      

      {/* ✅ Ajout du Globe 3D */}
      <GlobeModel className="w-full h-full" />

      {/* ✅ Désactiver le zoom et améliorer la navigation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Globe;
