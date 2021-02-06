import React from 'react'
import './Home.css'
import { HiDownload } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import Architect from '../../assets/undraw_circles_y7s2.svg'



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
                    <div>
                        <div className='home__content__contact btn'>
                            <h3>Contact me</h3>
                            <MdContacts />
                        </div>
                            <GrLinkedin />
                    </div>
                    <div className='home__content__cv_port'>
                        <div  className='home__content__cv btn'>
                            <h3>CV</h3>
                            <HiDownload />
                        </div>
                        <div className='home__content__portfolio btn'>
                            <h3>Portfolio</h3>
                            <HiDownload />
                        </div>
                    </div>
                </div>
                <img className='home__architect_img' src={Architect} alt='architect' />
            </div>
        </div>

    )
}

export default Home


