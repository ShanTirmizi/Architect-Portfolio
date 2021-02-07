import React, { useState } from 'react'
import './Projects.css'
import ReactCardFlip from 'react-card-flip'
import Project from './Project/Project'

const Projects = () => {
    return (
        <div className='projects' id='projectsNav'>
            <h1>Projects</h1>
           <div className='projects__content'>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />

           </div>
        </div>
    )
}

export default Projects
