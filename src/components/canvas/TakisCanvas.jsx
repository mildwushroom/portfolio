import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Takis = () => {
  const takis = useGLTF('/takis/scene.gltf')

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <primitive
        object={takis.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
};

const TakisCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 8]
      }}
    >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Takis />
    </Suspense>
    <Preload all />
    </Canvas>
  )
};

export default TakisCanvas;