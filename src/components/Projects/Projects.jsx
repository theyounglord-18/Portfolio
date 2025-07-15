import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import theme_pattern from '../../assets/theme_pattern.svg';

const projects=[
    {
        id:1,
        imageUrl:"https://cdn.dribbble.com/userupload/11224083/file/original-3d2769866b4db0ae0c4fc7a7b1ed3687.png?resize=450x338&vertical=center",
        name:"Crypto-verse Application With React.Js and Redux Toolkit",
        description:"Provides the information like total number of cryptocurrencies, total markets and market caps.",
        projectUrl:"https://crypto-verse-app.vercel.app/"
    },
    {
        id:2,
        imageUrl:"https://res.cloudinary.com/dolw4wncb/image/upload/v1752561332/Digital-India-Blog_2X1-1_1_f8e0u7.jpg",
        name:"Creative Digital Agency",
        description:"Landing Page for a creative digital Agency",
        projectUrl:"https://cda.niat.tech/"
    },
    {
        id:3,
        imageUrl:"https://res.cloudinary.com/dolw4wncb/image/upload/v1752561580/download_bknvkb.jpg",
        name:"WikiSearch",
        description:"Wikipedia Serach engine",
        projectUrl:"https://kushaljs.niat.tech/"
    },
     
]

const Projects = () => {
  return (
    <div id="projects" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme_pattern"/>
      </div>
      <div className="mywork-container">
        {projects.map(project=>(
            <ProjectCard projectDetails={project} key={project.id}/>
        ))}
      </div>
    </div>
  )
}

export default Projects

