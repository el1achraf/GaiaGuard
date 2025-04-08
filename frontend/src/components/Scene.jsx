import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import gsap from 'gsap';

function Scene({ isAboutView }) {
  const { camera } = useThree();

  useEffect(() => {
    // Initial camera position
    if (!isAboutView) {
      camera.position.set(0, 0, 10);
    }

    // Listen for globe transitions
    const handleGlobeTransition = (event) => {
      const { isAboutView } = event.detail;
      
      gsap.to(camera.position, {
        z: isAboutView ? 8 : 10, // Zoom in slightly for About view
        duration: 1.5,
        ease: "power2.inOut"
      });

      gsap.to(camera, {
        fov: isAboutView ? 50 : 75, // Adjust FOV for more dramatic effect
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        }
      });
    };

    window.addEventListener('globe-transition', handleGlobeTransition);
    return () => window.removeEventListener('globe-transition', handleGlobeTransition);
  }, [camera]);

  return (
    // ... your existing scene content
  );
}

export default Scene; 