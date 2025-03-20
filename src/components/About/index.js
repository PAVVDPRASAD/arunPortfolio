import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const About = ({ theme }) => {
  return (
    <div className='about'>
      <motion.section
      id="about"
      className={`about ${theme}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      
      >
        <h2 className='about-heading'>About Me</h2>
        <p className='about-discription'>I am a passionate Frontend Developer with expertise in ReactJS and the MERN stack. I specialize in building scalable, responsive, and user-friendly web applications. With strong problem-solving skills and a keen eye for UI/UX, I enjoy creating seamless digital experiences. I am always eager to learn new technologies and contribute to innovative projects.</p>
      </motion.section>
    </div>
  );
}

export default About;