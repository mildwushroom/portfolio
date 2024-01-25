/* eslint-disable react/no-unknown-property */
// import * as THREE from 'three';
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload, ScrollControls, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Kirby = ({ isMobile }) => {
  
  const kirby = useGLTF('/kirby/scene.gltf');  
  return (
    <Float speed={5} floatIntensity={2}>
      <mesh>
        <primitive 
          object={kirby.scene}
          rotation={[-0.2, 0, 0]}
          scale={isMobile ? 2 : 3}
        />
      </mesh>
    </Float>
  )
};

const KirbyCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle whether or not the user is on mobile
  useEffect(() => {
    // Create mediaQuery list object
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set state based on result of mediaQuery
    setIsMobile(mediaQuery.matches);

    // A function that is called whenever mediaQuery changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove event listener when the component unmounts
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={10}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Kirby isMobile={isMobile} />
    </Suspense>
    <Preload all/> 
    </Canvas>
  )
}
export default KirbyCanvas;