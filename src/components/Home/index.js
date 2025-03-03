import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import './index.css';

function Home({ theme }) {

  useEffect(() => {
    document.title = "Arun Pechetti";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = 'https://res.cloudinary.com/ddyogx5yr/image/upload/v1740813549/2ourrfa7_fhisux.png'
    }
  }, []);

  return (
    <motion.section
      id="home"
      className={`home ${theme}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi, I'm <span className='name_style'>Arun Pechetti</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className='discription-role'
        >
          I like to craft solid and scalable frontend products with great user experiences.
        </motion.p>
        <a href="#projects">
        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          View My Work
        </motion.button>
        </a>
      </div>
    </motion.section>
  );
}

export default Home;