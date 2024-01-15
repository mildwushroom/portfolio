/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Kirby = () => {

  const kirby = useGLTF('/kirby/scene.gltf');
  
  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" /> */}
      {/* <pointLight intensity={1}/> */}
      {/* <spotLight position={[-20, 50, 10]}/> */}
      <primitive 
        object={kirby.scene}
        rotation={[-0.2, 0, 0]}
      />
    </mesh>
  )
};
const KirbyCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      <Kirby/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default KirbyCanvas;