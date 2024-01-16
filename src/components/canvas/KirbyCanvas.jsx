/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, ScrollControls, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Kirby = () => {
  
  const scroll = useScroll();
  const kirby = useGLTF('/kirby/scene.gltf');
  const { scene, nodes, animations } = useGLTF('/kirby/scene.gltf');
  const { actions } = useAnimations(animations, scene);

  // I think it's not working bc kirby doesn't have animations, but if it did...
  // console.log('Actions:', actions); // Log actions to see its value


  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)));
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useFrame((state, delta) => {
    // const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    state.camera.lookAt(0, 0, 0)
  })


  
  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" /> */}
      {/* <pointLight intensity={1}/> */}
      {/* <spotLight position={[-20, 50, 10]}/> */}
      <primitive 
        object={kirby.scene}
        // Whatever I'm doing above, it's overriding rotation
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
        autoRotate={true}
        autoRotateSpeed={20}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ScrollControls pages={3} damping={0.25}>
        <Kirby/>
      </ScrollControls>
    </Suspense>
    {/* Gets everything to load first */}
    <Preload all/> 
    </Canvas>
  )
}
export default KirbyCanvas;