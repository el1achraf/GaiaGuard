/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

// ✅ Composant pour charger et animer le Globe
const GlobeModel = () => {
  const { scene } = useGLTF("/models/nglobe.glb");
  const globeRef = useRef();
  const [scaleProgress, setScaleProgress] = useState(0.1); // Commence petit

  useFrame(() => {
    if (globeRef.current) {
      // Rotation lente
      globeRef.current.rotation.y += 0.004;

      // Animation d'agrandissement progressif
      if (scaleProgress < 4.5) {
        setScaleProgress((prev) => prev + 0.08); // Augmente progressivement (ajuster la vitesse ici)
      }
      globeRef.current.scale.set(scaleProgress, scaleProgress, scaleProgress);
    }
  });

  return (
    <primitive
      ref={globeRef}
      object={scene}
      scale={[scaleProgress, scaleProgress, scaleProgress]} // Anime la taille
      position={[0, -1.6, 0]}
      rotation={[0, -Math.PI / 1.68, 0]} // ✅ Tourne vers l'Afrique
    />
  );
};

// ✅ Composant principal de la scène
const Globe = () => {
  return (
    <Canvas
      style={{
        width: "100vh",
        height: "100vh",
        background: "transparent",
      }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      {/* Lumières pour le Globe */}
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 0, 10]} intensity={12} color={"#99bbff"} />

      {/* ✅ Ajout du Globe 3D avec animation de taille */}
      <GlobeModel />

      {/* ✅ Désactiver le zoom et améliorer la navigation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Globe;
