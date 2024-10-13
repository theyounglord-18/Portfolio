import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({projectDetails}) => {
    const{imageUrl,name,description,projectUrl}=projectDetails
  return (
    <div className='card'>
      <img src={imageUrl} alt="project-image"/>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type="button"><a href={projectUrl}>Project Tour</a></button>
    </div>
  )
}

export default ProjectCard
