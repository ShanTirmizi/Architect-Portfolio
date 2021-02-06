import React, { useState, useEffect } from 'react'
import './Home.css'
import TypeWriter from 'typewriter-effect'
import { Parallax } from 'react-scroll-parallax';
import { MdContentCopy } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import Architect from '../../assets/undraw_circles_y7s2.svg'
// import Architect from '../../assets/undraw_designer_life_w96d.svg'
// import Architect from '../../assets/undraw_everyday_design_gy64.svg'
// import Architect from '../../assets/undraw_interaction_design_odgc.svg'
// import Architect from '../../assets/undraw_prototyping_process_rswj.svg'
// import Architect from '../../assets/undraw_urban_design_kpu8.svg'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [alert, setAlert] = useState(true)

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setAlert(false)
    //     }, 2000)
    //     return () => clearTimeout(timeout)
    // }, [alert])
    console.log(isOpen)
    return (
        <div className='home'>
            <div className='home__content'>
                <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
                    <div>
                        <div className='home__content__title'>
                            <h1 className='home__content__title__h1'>Hi,</h1>
                            <h1 className='home__content__title__h1'>I'm Emily Flynn,</h1>
                            <div className='home__content__title__h1_dynamic'>
                            <TypeWriter
                                options={{
                                strings: ['An Architect,'],
                                autoStart: true,
                                loop: true,
                                }}
                            />
                            </div>
                        </div>
                        <div  className='home__contact__link'>
                            <div onClick={() => setIsOpen(!isOpen)} className='home__content__contact btn'>
                                <h2>Contact me</h2>
                                <MdContacts className='icon' />
                            </div>
                            <a className='linkedin' href='https://www.linkedin.com/in/emilynflynn/' target='__blank'>
                                <GrLinkedin className='home__link' />
                            </a>
                            {
                                isOpen && (
                                    <div className='home__alert'>
                                        <div className='home__link__cancel'>
                                            <h3>Contact info</h3>
                                            <AiOutlineClose className='home__copy' onClick={() => setIsOpen(false)} />
                                        </div>
                                        <div className='home__link__contact'>
                                            <p>Phone:</p>
                                            <p>07583379880</p>
                                        </div>
                                        <div className='home__link__clip' 
                                                onClick={() => {
                                                    navigator.clipboard.writeText('enfly26@gmail.com')
                                                }}>
                                                <p>Email: enfly26@gmail.com</p>
                                                <MdContentCopy className='home__copy' />
                                            </div>
                                    </div>
                                )}
                        </div>
                        <div className='home__content__cv_port'>
                            <div  className='home__content__cv btn'>
                                <h2>CV</h2>
                                <HiDownload className='icon' />
                            </div>
                            <div className='home__content__portfolio btn'>
                                <h2>Portfolio</h2>
                                <HiDownload  className='icon'/>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                    <img className='home__architect_img' src={Architect} alt='architect' />
                </Parallax>
            </div>
        </div>

    )
}

export default Home


