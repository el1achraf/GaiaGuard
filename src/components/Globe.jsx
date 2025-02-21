/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";



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

      {/* ✅ Ajout du Globe 3D */}
      <GlobeModel className="w-full h-full" />

      {/* ✅ Désactiver le zoom et améliorer la navigation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Globe;
