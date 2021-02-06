import React from 'react'
import './About.css'
import Architect from '../../assets/undraw_creative_draft_vb5x.svg'

const About = () => {
    return (
        <div className='about'>
            <img className='about__img' src={Architect} alt='My pic' />
            <div className='about__img__content'>
                <h1>About me</h1>
                <hr />
                <h3>A graduate from the University of Portsmouth school of Architecture, looking for a job as a Part 1 Architectural Assistant.</h3>
                <h3>This portfolio showcases some of the work that I have carried out over the last few years at University and highlights some of my interests.</h3>
            </div>
        </div>
    )
}

export default About
