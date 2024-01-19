/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { OrbitControls, Preload, ScrollControls, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import CanvasLoader from '../Loader';


const Flower = () => {

  const { scene, animations } = useGLTF('/lotus-flower/scene.gltf');
  const mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    // Assuming there's only one animation clip
    const animationClip = animations[0];
    const action = mixer.clipAction(animationClip);

    // Start playing the animation
    action.play();

    // Clean up when the component unmounts
    return () => {
      action.stop();
    };
  }, [mixer, animations]);

  // Update the animation on each frame
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh>
      <ambientLight intensity={0.3} color={0xFFC0CB}/>
      <directionalLight intensity={0.2} position={[0.15, 0.15, 20]}/>
      <hemisphereLight intensity={.7} groundColor="black" />
      {/* <pointLight intensity={.5}/> */}
      {/* <spotLight position={[-20, 50, 10]}/> */}
      <primitive 
        object={scene}
        rotation={[0, 100, 30]}
        scale={[3, 3, 3]}
      />
    </mesh>
  )
};

const FlowerCanvas = () => {
  const scroll = useScroll();

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense>
        <OrbitControls
          // autoRotate={true}
          // autoRotateSpeed={12}
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <ScrollControls pages={3} damping={0.25} {...scroll}>
          <Flower/>
        </ScrollControls>
      </Suspense>
      <Preload all/> 
    </Canvas>
  )
};

export default FlowerCanvas;