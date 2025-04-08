/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const GlobeModel = () => {
  const { scene } = useGLTF("/models/earth.glb"); // Chemin mis à jour

  return (
    <primitive 
      object={scene} 
      scale={[5, 5, 5]} 
      position={[0, 0, 0]} 
      rotation={[0, -Math.PI / 1.68, 0]} 
    />
  );
};

export default GlobeModel;
