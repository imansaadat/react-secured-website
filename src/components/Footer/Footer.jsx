import React, { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { SiDatabricks } from 'react-icons/si'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { Link } from 'react-scroll'
import './Footer.css'
const Footer = () => {

    const [backTop, setBackTop] = useState(false)
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            setBackTop(true)
        }
        else {
            setBackTop(false)
        }
    })

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='top_footer'>
                    <div className='footer_logo'>
                        <SiDatabricks className='icon' />
                        <h3>Secured</h3>
                    </div>
                </div>
                <div className='col_container'>
                    <div className='col'>
                        <h3>NAVIGATION</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Data</a></li>
                            <li><a href="/">Cloud</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>MY ACCOUNT</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Data</a></li>
                            <li><a href="/">Cloud</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>INFORMATION</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Data</a></li>
                            <li><a href="/">Cloud</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>LEGAL</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Data</a></li>
                            <li><a href="/">Cloud</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col form'>
                        <h3>JOIN OUR TEAM</h3>
                        <form>
                            <div className='filed_block'>
                                <input type="email" className='email' placeholder='Enter your email' />
                                <FiMail className='email_icon' />
                            </div>
                        </form>
                        <div className="social_link">
                            <a href="/"><FiFacebook className='social-icon' /></a>
                            <a href="/"> <FiInstagram className='social-icon' /></a>
                            <a href="/"><FiLinkedin className='social-icon' /></a>
                            <a href="/"><FiGithub className='social-icon' /></a>
                            <a href="/"><FiDribbble className='social-icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Link className={backTop ? 'bacKTop active' : 'backTop'} activeClass="active" to="nav" spy={true} smooth={true} duration={550} >
                <BsFillArrowUpCircleFill className='icon blue' />
            </Link>
        </footer>
    )
}

export default Footer