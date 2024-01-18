/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { OrbitControls, Preload, ScrollControls, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import CanvasLoader from '../Loader';


const Flower = () => {

  // Our scene, the flower
  // const flower = useGLTF('/lotus-flower/scene.gltf');

  // Scrolling and animation settings
  const scroll = useScroll();
  const { scene, nodes, animations } = useGLTF('/lotus-flower/scene.gltf');
  console.log('animations', animations)
  console.log('clip', animations[0])
  const { actions } = useAnimations(animations, scene);
  console.log('actions[0]', actions[0])
  // actions.clips[0]?

  useEffect(() => {
    // if isScrolling
    const clip = animations[0];


    // if (scroll.isScrolling) {
    //   console.log('scrolling!')
    // } else {
    //   console.log('not scrolling!')
    // }
      // play take 1
    // else
      // stop take 1
      // actions[0].play();
  }, [scroll.isScrolling, actions]) // Eventually you should add state for isScrolling

  // const { scrollYProgress } = useScroll({
  //   target: scene
  //   offset: ['start end', 'end start']
  // })


  // Figure out what actions is supposed to look like bc it's causing errors
  const fromUseAn = useAnimations(animations, scene);
  // console.log('useAnimations:', fromUseAn);
  // console.log('actions:', fromUseAn.actions);
  // console.log('available animations:', Object.keys(fromUseAn.actions || {}));
  console.log('actions!', actions)

  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)));
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useFrame((state, delta) => {
    // const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    // state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    state.camera.lookAt(0, 0, 0)
  })

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
        <ScrollControls pages={3} damping={0.25}>
          <Flower/>
        </ScrollControls>
      </Suspense>
      <Preload all/> 
    </Canvas>
  )
};

export default FlowerCanvas;