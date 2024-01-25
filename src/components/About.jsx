import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <div className='Card'>
      <motion.div variants={textVariant()} style={{ marginTop: '2em', marginBottom: '2em' }}>
        <h1 className={styles.sectionHeadText}>About me.</h1>
        <motion.p 
          variants={fadeIn('', '', 0.1, 1)}
          // className="mt-4 text-[17px] max-w-3xl leading-[30px]"
          >
          I&#39;m a frontend developer with experience in JavaScript and Python, and expertise in frameworks like React and Node.js. I&#39;m a quick learner and love collaborating with others to create intuitive and fun user-friendly solutions. Let&#39;s talk!
        </motion.p>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about");