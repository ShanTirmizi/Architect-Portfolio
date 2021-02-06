import React from 'react'
import './About.css'
import Architect from '../../assets/undraw_creative_draft_vb5x.svg'

const About = () => {
    return (
        <div className='about'>
            <img className='about__img' src={Architect} alt='My pic' />
            <div>
                <h1>About me</h1>
                <h3>A graduate from the University of Portsmouth school of Architecture, looking for a job as a Part 1 Architectural Assistant.
                    This portfolio showcases some of the work that I have carried out over the last few years at University and highlights some of my interests.</h3>
            </div>
        </div>
    )
}

export default About
