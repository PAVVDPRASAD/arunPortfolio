import React,{useState} from 'react';
import './index.css';

function Projects() {
  const projects = [
    { id: 1, 
      name: 'Nxt Trendz', 
      image: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png',
      // tech:'React, Node, MySQL',
      description: 'Developed and deployed a responsive shopping app using ReactJS in 1 week, featuring login, search, and cart systems with persistent sessions. Utilized Context API for state management and React Router for secure navigation. Followed clean code practices and recommended Node.js backend over mock APIs for scalability.', 
      link: 'https://arun1265.ccbp.tech' },
    { id: 2, 
      name: 'Nxt Watch',
      image: 'https://www.wwe.com/f/styles/og_image/public/all/2022/09/20220913_NXT_NewLogo--52bc0a658df3cb6753ffd8b7da947690.jpg',
      description: 'Built a video streaming app using ReactJS in 5 days, featuring authentication, video search, and category filters. Managed state with Context API, implemented secure navigation via React Router, and designed a responsive, scalable UI following clean code principles.', 
      link: 'https://arun1266.ccbp.tech/' },
      { id: 3, 
        name: 'Simple todos',
        image: 'https://todolist.london/wp-content/uploads/2020/01/To-Do-List-Logo-for-Facebook.jpg',
        description: 'A clean and intuitive task manager built to add, edit, and delete tasks. Demonstrates core front-end skills (HTML, CSS, JavaScript) with optional back-end integration. Perfect for showcasing foundational development abilities.', 
        link: 'https://arun1267.ccbp.tech' },
      { id: 4, 
        name: 'Jobby app',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/7c/d0/a0/7cd0a02f-2b9f-a175-d0e5-c610797b4609/AppProd-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
        description: 'A streamlined platform to browse, post, and manage job listings. Built with a focus on user experience, this app showcases skills in front-end development (HTML, CSS, JavaScript, ReactJs) and optionally back-end functionality for data management. Ideal for demonstrating web development and database integration expertise.', 
        link: 'https://arun1268.ccbp.tech'},
      { id: 5, 
        name: 'Restarent app',
        image: 'https://graphicsfamily.com/wp-content/uploads/edd/2023/02/Restaurant-Logo-Design-2-scaled.jpg',
        description: 'A user-friendly platform to explore menus, place orders, and manage reservations. Built with a clean design, this app highlights front-end development skills (HTML, CSS, JavaScript, ReactJs) and optionally back-end integration for order and reservation management. Perfect for showcasing web development and UX design abilities.', 
        link: 'https://arun1269.ccbp.tech'},
      { id: 6, 
        name: 'Spotify Clone',
        image: 'https://media.wired.com/photos/5926d35ccfe0d93c47431806/master/pass/SpotifyHP.jpg',
        description: 'A music streaming app inspired by Spotify, featuring song playback, playlists, and search functionality. Built with a focus on front-end development (HTML, CSS, JavaScript, ReactJs) and optionally back-end integration for music storage and user management. Demonstrates skills in UI/UX design and web development.', 
        link: 'https://arun1270.ccbp.tech'},
        { id: 7, 
          name: 'Prime Video ',
          image: 'https://logosmarcas.net/wp-content/uploads/2021/03/Amazon-Prime-Video-Logo.png',
          description: 'Prime Video App: A React-based movie streaming application featuring a categorized movie list, smooth UI, and dynamic content rendering.', 
          link: 'https://arun1265prime.ccbp.tech'},
  ];

  const [isExpanded, setIsExpanded] = useState({})

  const toggleExpanded = (id)=>{
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

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
              <div>
              <p className='project-discription' style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: isExpanded[project.id] ? "unset" : 3,
                textOverflow: "ellipsis",
              }}
              >
                {project.description}
              </p>
              <button type="button" onClick={()=>toggleExpanded(project.id)} style={{
                borderWidth:"0px",
                backgroundColor:"transparent",
                color:"black",
                paddingTop:"0px",
                marginBottom:"15px",
                cursor:"pointer"
              }}>
                {isExpanded[project.id] ? "View Less" : "View More"}
              </button>
              </div>
              <button className='btn btn-primary view-project-btn'>
              <a style={{textDecoration:"none", color:"white"}} href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects;