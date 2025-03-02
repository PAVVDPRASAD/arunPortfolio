import React from 'react';
import './index.css';

function Projects() {
  const projects = [
    { id: 1, 
      name: 'Nxt Trendz', 
      image: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png',
      description: 'Developed and deployed a fully functional and responsive shopping application using ReactJS within 1 week which has features such as login, search, and cart systems along with persistent sessions. Used Context API for state management and navigated securely with React Router.Followed clean code standards as well as suggested using a backend in the form of Node.js instead of using mock APIs.', 
      link: 'https://arun1265.ccbp.tech' },
    { id: 2, 
      name: 'Nxt Watch',
      image: 'https://www.wwe.com/f/styles/og_image/public/all/2022/09/20220913_NXT_NewLogo--52bc0a658df3cb6753ffd8b7da947690.jpg',
      description: 'Built a video streaming application using ReactJS in just 5 days, with features like authentication, video search, and categories. Managed application state with Context API and secured navigation using React Router. Designed a responsive UI adhering to clean code principles and scalable architecture. ', 
      link: 'https://arun1266.ccbp.tech/' },
  ];

  return (
    <div id="projects" className="projects">
      <h2 className='about-heading mb-4'>Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-card">
            <div className='project-image-cont' >
              <img src={project.image} alt={project.name} className='project-image' />
            </div>
            <div className='m-3 d-flex flex-column text-start'>
              <h3 className='project-heading'>{project.name}</h3>
              <p className='project-discription'>{project.description}</p>
              <button className='btn btn-primary '>
              <a style={{textDecoration:"none", color:"white"}} href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;