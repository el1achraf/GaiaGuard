/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

const BookModel = ({ onLoaded }) => {
  const { scene } = useGLTF("/models/Mbook2.glb", true);
  const bookRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loaded, setLoaded] = useState(false);

  const isLargeScreen = screenWidth >= 1024;
  const bookPosition = isLargeScreen ? [0, 0, 0] : [0, -0.3, 0];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Notify parent when loaded
    if (scene && onLoaded && !loaded) {
      setLoaded(true);
      onLoaded();
    }
  }, [scene, onLoaded, loaded]);

  return (
    <primitive
      ref={bookRef}
      object={scene}
      scale={[1.3, 1.3, 1.3]} // Fixed scale directly
      rotation={[1.4, 0, 0]}
      position={bookPosition}
    />
  );
};



const Book = ({ onReady }) => {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth >= 1024 ? "100vh" : "100vw",
    height:
      window.innerWidth >= 1024 ? "100vh" : `${window.innerHeight * 0.8}px`,
  });

  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({
        width: window.innerWidth >= 1024 ? "40vh" : "100vw",
        height:
          window.innerWidth >= 1024 ? "100vh" : `${window.innerHeight * 0.8}px`,
      });
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <Canvas
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          background: "transparent",
        }}
        camera={{ position: [0, 1, 7], fov: 50 }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <pointLight position={[0, 5, 0]} intensity={1.2} />

        <Suspense fallback={null}>
          <BookModel onLoaded={onReady} />
        </Suspense>

        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};
 export default Book;