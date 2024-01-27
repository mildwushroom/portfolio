// import { motion } from 'framer-motion';
import FlowerCanvas from './canvas/FlowerCanvas';
import KirbyCanvas from './canvas/KirbyCanvas';
import { styles } from '../styles';
// import the canvas for whatever 3d thing you're bringing in 

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fc93e8]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=''>
          {/* <h1>Hi! I&#39;m <span className='text-[#fc93e8]'>Cristina</span></h1> */}
          <h1 className={styles.heroHeadText}>Hi! I&#39;m Cristina.</h1>
          <p className={styles.heroSubText}>
            I make fun user interfaces and web applications
          </p>
        </div>
      </div>
        <KirbyCanvas/>
      {/* <p>Under construction<span role="img" aria-label="rocket"> 🚀 </span>Expect changes frequently!</p> */}
    <section id='kirby-container'>
      {/* <FlowerCanvas/> */}
    </section>
    </section>
  )
};

export default Hero;