import React from 'react'
import './Home.css'
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
    return (
        <div className='home'>
            <div className='home__content'>
                <div>
                    <div className='home__content__title'>
                        <h1>Hi,</h1>
                        <h1>I'm Emily Flynn,</h1>
                        <h1>An Architect,</h1> 
                    </div>
                    <div  className='home__contact__link'>
                        <div className='home__content__contact btn'>
                            <h2>Contact me</h2>
                            <MdContacts className='icon' />
                        </div>
                        <a className='linkedin' href='https://www.linkedin.com/in/emilynflynn/' target='__blank'>
                            <GrLinkedin className='home__link' />
                        </a>
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
                <img className='home__architect_img' src={Architect} alt='architect' />
            </div>
        </div>

    )
}

export default Home


