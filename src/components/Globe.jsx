import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// ✅ Composant pour charger le modèle du Globe
const GlobeModel = () => {
  const { scene } = useGLTF("/models/nglobe.glb");
  
  return (
    <primitive
      // eslint-disable-next-line react/no-unknown-property
      object={scene}
      scale={[5, 5, 5]}
      // eslint-disable-next-line react/no-unknown-property
      position={[0, 0, 0]}
      // eslint-disable-next-line react/no-unknown-property
      rotation={[0, -Math.PI / 1.68, 0]} // ✅ Tourne la Terre vers l'Afrique
    />
  );
};

// ✅ Composant pour générer un effet d'étoiles dynamique comme sur Moment Zero
const AnimatedStars = () => {
  const starsRef = useRef();
  const numStars = 10000;

  // Génération des étoiles réparties aléatoirement
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
      starsRef.current.material.opacity = 1 + 0.4 * Math.sin(clock.getElapsedTime() * 2); // Effet de scintillement dynamique
      starsRef.current.rotation.y += 0.0005; // Légère rotation
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
      <pointsMaterial size={0.} color={"#ffffff"} opacity={2} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
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
        background: "#010A20", // Bleu spatial plus profond
      }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      {/* Lumières pour le Globe */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={3.0} color={"#ffffff"} />
      <pointLight position={[0, 0, 10]} intensity={12} color={"#99bbff"} />

      {/* ✅ Ajout des étoiles animées avec effet de scintillement */}
      <AnimatedStars />

      {/* ✅ Ajout du Globe 3D */}
      <GlobeModel />

      {/* ✅ Désactiver le zoom et améliorer la navigation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Globe;
