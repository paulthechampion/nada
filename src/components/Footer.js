import React from 'react'
import email from "../img/mini-email.png"
import linkedin from "../img/mini-link.png"
import location from "../img/location.png"

export default function Footer() {
    return (
        <footer id='footer'>
            <h1>Let's Talk</h1>
            <div className="footer-flex"  id='footers'>
                <div className="footer-connect-div">
                    <ul>
                        <li className='slide-in from-left'><span><img src={email} alt="email icon"/></span><a href='donpantee@gmail.com' className='linklink'>donpantee@gmail.com</a></li>
                        <li className='slide-in from-left'><span><img src={linkedin} alt="linkedin icon"/></span><a href="https://linkedin.com/in/abdul-panti-b8030a1ab" className='linklink'>Linkedin</a></li>
                        <li className='slide-in from-left'><span><img src={location} alt="location icon"/></span><a>Lagos, Nigeria</a></li>
                    </ul>
                </div>

                <div className="footer-hello-div">
                    <div className='smileyFace'>
                        <div className='flex smileyFlex'>
                            <div></div><div></div>
                        </div>
                        <div className='smileyMouth'>
                            <span>Hire Me</span> <i className="fas fa-arrow-up arrow-up"></i>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='flex'>
                <div className='copy'>2022 abdulauwal</div>
                <div className='design'>Designed by abdulauwal</div>
            </div>
            
        </footer>
    )
}
