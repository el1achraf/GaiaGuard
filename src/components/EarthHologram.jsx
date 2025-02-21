/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from 'react';

// ✅ Composant pour charger le modèle du Globe
const GlobeHologram = () => {
  const { scene } = useGLTF("/models/earth_hologram.glb");
  const modelRef = useRef();

  // Ajoute une rotation continue
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Ajustez la vitesse en modifiant 0.5
    }
  });
  
  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[5, 5, 5]}
      position={[0, 2, 0]}
      rotation={[0, -Math.PI / 1.68, 0]}
    />
  );
};

// ✅ Composant principal de la scène
const EarthHologram = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "60vh",
        position: "absolute",
        bottom: "100px",
        left: "0",
        zIndex: 10
      }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <GlobeHologram />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={2} // Vitesse de rotation automatique
        />
      </Suspense>
    </Canvas>
  );
};

export default EarthHologram;
