import React from 'react'
import HomeMeme from "../img/meme3.png"
import phone from "../img/phone1.png"

export default function AboutContact() {
    return (
        <div className="homeDiv">
            <div className="testDiv" id="about">
                <div className="homeWrite">
                    <h2 className="about-me-h2">
                    about me.
                    </h2>
                    <p>
                    My name is Abdullahi Auwal and I am a UI designer and UX Researcher
                    currently concentrating on product strategy, graphic design, interaction 
                    design, and prototyping. Working experience in consumer technology, finance, 
                    enterprise, non-profits, and healthcare.
                    </p>
                </div>

                
                <div className="homeMemeDiv">
                    <div className="homeMemeSubDiv">
                        <img src={HomeMeme} alt="homeMeme" className="homeMeme"/>
                    </div>
                </div>

                <p className="about-down-p"> I am now living in <span className="color-text">Lagos, Nigeria,</span> where I deal with individuals and companies 
                    from all over the <span className="color-text">world.</span>
                </p>
            </div>
            
            <div className="testDiv contact-div" id="contact">
                <div className="homeWrite">
                    <h2 className="about-me-h2">
                    contact.
                    </h2>
                    <p className="contact-div-p">
                    You can speak to me about anything, be it design
                    or culture, maybe an idea?
                    </p>
                    <p className="contact-div-p">
                    Send me an email <a href = "mailto: donpantee@gmail.com" className="no-line-link"><span className="color-text">donpantee@gmail.com</span></a>
                   
                    </p>
                </div>

                
                <div className="homeMemeDiv">
                    <div className="homeMemeSubDiv contactMemeDiv">
                        <img src={phone} alt="homeMeme" className="homeMeme"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
