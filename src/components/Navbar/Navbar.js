import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
    return (
        <nav className='floating__menu'>
            <Link className='floating__menu__link home__navlink' activeClass="home_active" to={'homeNav'} smooth={true} duration={1000} offset={-2}     spy={true}
>
                Home
            </Link>
            <Link  className='floating__menu__link about__navlink' activeClass="home_about" to={'aboutNav'} smooth={true} duration={1000}  offset={-2}    spy={true}
>
                About
            </Link>
            <Link  className='floating__menu__link projects__navlink' activeClass="home_projects" to={'projectsNav'} smooth={true} duration={1000}  offset={-2}    spy={true}
>
                Projects
            </Link>
        </nav>
    )
}

export default Navbar
