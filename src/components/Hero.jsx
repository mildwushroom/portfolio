// import { motion } from 'framer-motion';
import FlowerCanvas from './canvas/FlowerCanvas';
import KirbyCanvas from './canvas/KirbyCanvas';
// import the canvas for whatever 3d thing you're bringing in 

const Hero = () => {
  return (
    <section id='kirby-container'>
      <KirbyCanvas/>
      {/* <FlowerCanvas/> */}
    </section>
  )
};

export default Hero;