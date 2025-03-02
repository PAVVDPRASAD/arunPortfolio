import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./index.css";

const Skills = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const skills = [
    { name: "React.js", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740818187/react_logo_aj2i4q.webp" },
    { name: "Node.js", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817271/node_js_raxxbx.png" },
    { name: "JavaScript", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817201/free-javascript-9294848-7577991_vtp66g.webp" },
    { name: "Python", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740818496/python_logo_uorypj.png" },
    { name: "HTML5", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817233/logo-html-5-1536_qc2qbv.png" },
    { name: "CSS3", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817216/logo-css-3-1024_abb3aj.png" },
    { name: "MySQL", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817189/database_PNG5_mo1plu.png" },
    { name: "Bootstrap", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817130/bootsrap_png_sigbqz.png" },
    { name: "Redux", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817322/redux-logo_s4a3x8.png" },
    { name: "MongoDB", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817246/Mangodb_kevcr9.jpg" },
    { name: "TypeScript", logo: "https://res.cloudinary.com/ddyogx5yr/image/upload/v1740817285/png-transparent-typescript-language-javascript-static-type-typescript-logo-frontend-3d-icon_duqzn8.png" },
  ];

  // Duplicate skills for infinite loop effect
  const repeatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <h2 className="about-heading mt-5">Skills</h2>
      <motion.div ref={carousel} className="carousel">
        <motion.ul
          className="skills-list"
          animate={{ x: [0, -width] }}
          transition={{ ease: "linear", duration: 50, repeat: 5 }} // Continuous loop
        >
          {repeatedSkills.map((skill, index) => (
            <li key={index} className="skill-item">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p className="skill-name">{skill.name}</p>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Skills;
