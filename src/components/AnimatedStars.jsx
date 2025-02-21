import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


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
      starsRef.current.material.opacity = 1 + 0.4 * Math.sin(clock.getElapsedTime() * 2);
      starsRef.current.rotation.y += 0.0005;
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
        color="#ffffff" 
        opacity={10}
        sizeAttenuation={true}
        transparent 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};

export default AnimatedStars; 