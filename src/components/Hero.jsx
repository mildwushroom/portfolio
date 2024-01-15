import { motion } from 'framer-motion';
import KirbyCanvas from './canvas/KirbyCanvas';
// import the canvas for whatever 3d thing you're bringing in 

const Hero = () => {
  return (
    <section className='Card'>
      <KirbyCanvas/>
    </section>
  )
};

export default Hero;