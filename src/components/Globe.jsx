/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

// ✅ Composant pour charger et animer le Globe
const GlobeModel = () => {
  const { scene } = useGLTF("/models/nglobe.glb");
  const globeRef = useRef();
  const [scaleProgress, setScaleProgress] = useState(0.1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Mettre à jour la largeur de l'écran dynamiquement
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Définir le style du Globe en fonction de la taille de l'écran
  const isLargeScreen = screenWidth >= 1024; // lg: et plus

  const globePosition = isLargeScreen ? [0, -1.6, 0] : [0, -1.5, 0];
  const globeRotation = isLargeScreen ? [0, -Math.PI / 1.68, 0] : [0, -Math.PI / 1.68, 0];

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.004;
      if (scaleProgress < 4.5) {
        setScaleProgress((prev) => prev + 0.08);
      }
      globeRef.current.scale.set(scaleProgress, scaleProgress, scaleProgress);
    }
  });

  return (
    <primitive
      ref={globeRef}
      object={scene}
      scale={[scaleProgress, scaleProgress, scaleProgress]}
      position={globePosition}
      rotation={globeRotation}
    />
  );
};

// ✅ Composant principal de la scène
const Globe = () => {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth >= 1024 ? "100vh" : "100vw",
    height: window.innerWidth >= 1024 ? "100vh" : `${window.innerHeight * 0.8}px`,
  });

  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({
        width: window.innerWidth >= 1024 ? "100vh" : "100vw",
        height: window.innerWidth >= 1024 ? "100vh" : `${window.innerHeight * 0.8}px`,
      });
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Canvas
      style={{
        width: canvasSize.width,
        height: canvasSize.height,
        background: "transparent",
      }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 0, 10]} intensity={12} color={"#99bbff"} />

      {/* ✅ Ajout du Globe 3D avec condition pour grand écran */}
      <GlobeModel />

      {/* Désactiver le zoom et améliorer la navigation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Globe;
