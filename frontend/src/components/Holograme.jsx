/* eslint-disable react/no-unknown-property */
import { Canvas,useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
useGLTF.preload("/models/future.glb");

const HologrameModel = () => {
  const { scene } = useGLTF("/models/future.glb", true);
  const bookRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = screenWidth >= 1024;
  const bookPosition = isLargeScreen ? [0, 0.9, 0] : [0, 0, 0];

  return (
    <primitive
      ref={bookRef}
      object={scene}
      scale={[0.35, 0.35, 0.35]} // ⬅️ scale statique
      rotation={[0.2, 3.9, 0]}
      position={bookPosition}
    />
  );
};

const Holograme = () => {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth >= 1024 ? "100vh" : "100vw",
    height:
      window.innerWidth >= 1024 ? "100vh" : `${window.innerHeight * 0.8}px`,
  });

  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({
        width: window.innerWidth >= 1024 ? "200vh" : "100vw", // ⬅️ زدنا 70vh بدل 40vh
        height:
          window.innerWidth >= 1024 ? "100vh" : `${window.innerHeight * 0.8}px`,
      });
    };
  
    updateSize(); // نعيطو عليها أول مرة
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
          <HologrameModel />
        </Suspense>

        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          
        />
      </Canvas>
    </div>
  );
};

export default Holograme;