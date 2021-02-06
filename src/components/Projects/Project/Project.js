import React, { useState } from 'react'
import './Project.css'
import ReactCardFlip from 'react-card-flip'


const Project = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleHover = () => {
        setIsFlipped(!isFlipped)
    }
    // const handleOut = () => {
    //     setIsFlipped(!isFlipped)
    // }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className='project__content__project__front' onMouseOver={handleHover}>
            </div>
            <div className='project__content__project__back' onMouseOut={handleHover}>
            </div>
        </ReactCardFlip>
    )
}

export default Project
