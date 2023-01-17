import {React, useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import phoneLap from "../img/phoneLap.png"
import darkPhone from "../img/darkPhone.png"
import WorkSec from "./WorksSec"
import Service from "./Services"
import Skills from "./Skills"
import twitter from "../img/twitter1.png"
import linkedin from "../img/linkedin-icon.png"
import dribble from "../img/dribbble-icon.png"
import check from "../img/serviceCheck.png"
import darkCheck from "../img/darkCheck.png"
import skillFlower from "../img/skillFlower.png"
import darkFlower from "../img/darkFlower.png"
import halfSun from "../img/half-sun.png"
import halfMoon from "../img/mini-moon.png"
import phonePanti from "../img/phonePanti.png"
import phoneHomePicDark from "../img/phoneHomePicDark.png"
import phoneFlower from "../img/phoneSkillFlower.png"
import darkPhoneFlower from "../img/darkPhoneFlower.png"


export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
      })


    function toggleDarkMode () {
        const service = document.getElementById("service")
        const skills = document.getElementById("skills")
        const home = document.getElementById("homeTest")
        const projects = document.getElementById("projects")
        const letsTalk = document.getElementById("footer")
        const root = document.getElementById("root")
        const lightBlack = document.getElementsByClassName("lightBlack")
        const header = document.getElementById("header")
        const talkDark = document.getElementsByClassName("talkDark")
        const lightBorder = document.getElementsByClassName("lightBorder")
        const projectsDiv = document.getElementById("projects-div")
        const needHoverWhite = document.getElementsByClassName("needHoverWhite")
        const needTalkWhite = document.getElementsByClassName("letsTalkWhite")
        const selectedProject = document.getElementById("selectedProject")
        const mainDiv = document.getElementById("toggle-main-div")
        const roundDiv = document.getElementsByClassName("toggle-mini-div")
        const phoneMenuTag = document.getElementById("phoneMenuTag")
        const phoneMenu = document.getElementById("phoneMenuId")
        const phoneMenuList = document.getElementsByClassName("phoneL")
        const needBrown = document.getElementsByClassName("need-brown")
        

        if(darkMode) {
            home.style.backgroundColor = "white"
            skills.style.backgroundColor = "white"
            service.style.backgroundColor = "#FCDA69"
            projects.style.backgroundImage = "url(./projectBack.png)"
            letsTalk.style.backgroundColor = "#FCDA69"
            header.style.backgroundColor = "white"
            header.style.borderBottom = "none"
            root.style.backgroundColor = "white"
            projectsDiv.style.backgroundColor = "rgb(0, 0, 0,0.7)"
            phoneMenuTag.style.color = "black"
            phoneMenu.style.backgroundImage = "url(./projectBack.png)"

            for(var i = 0 ; i < lightBlack.length; i++) {
                if(lightBlack[i].localName === "h2") {
                    lightBlack[i].style.color = "white"
                }else {
                    lightBlack[i].style.color = "black"
                }
            }
            for(var i = 0 ; i < talkDark.length; i++) {
                talkDark[i].style.backgroundColor = "black"
                talkDark[i].style.setProperty('color', '#F2994A', 'important');
            }
            for(var i = 0; i < lightBorder.length; i++) {
                lightBorder[i].style.borderTop = "3px solid black"
                if(i >= 4) {
                    lightBorder[i].style.borderBottom = "3px solid black" 
                }
            }

            for(var i=  0; i < needHoverWhite.length; i++) {
                needHoverWhite[i].classList.remove("hoverWhite")
                needHoverWhite[i].classList.add("hoverBrown")
            }

            for(var i = 0; i < roundDiv.length; i++) {
                roundDiv[i].classList.remove("toggle-slide-left")
                roundDiv[i].style.border = "5px solid #172A31";
                if(isDesktopOrLaptop) {
                    roundDiv[i].innerHTML = `<img src=${halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;display: block;height: 35px;"/>`
                }else {
                    roundDiv[i].innerHTML = `<img src=${halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;display: block;height: 23px;"/>`
                }
                  
            }

            for(var i = 0; i < phoneMenuList.length; i++) {
                phoneMenuList[i].style.color = "black"
            }

            for(var i = 0; i < needBrown.length; i++) {
                needBrown[i].style.color = "black"
                if(needBrown[i].classList.contains("p")) {
                    needBrown[i].style.color = "white"
                }
            }
            
            
            mainDiv.style.border = "5px solid #172A31";
            if(selectedProject) {
                selectedProject.style.color = "#FF8A00"
            }
        }else {
            console.log(lightBlack)
            home.style.backgroundColor = "#172A31"
            skills.style.backgroundColor = "#172A31"
            service.style.backgroundColor = "#172A31"
            projects.style.backgroundImage = "url(./darkProject.png)"
            letsTalk.style.backgroundColor = "#BAA358"
            header.style.backgroundColor = "#172A31"
            header.style.borderBottom = "2px solid #F2994A"
            root.style.backgroundColor = "#172A31"
            projectsDiv.style.backgroundColor = "rgb(0, 0, 0,0.7)"
            phoneMenuTag.style.color = "#F2994A"
            phoneMenu.style.backgroundImage = "url(./darkProject.png)"

            for(var i = 0 ; i < lightBlack.length; i++) {
                lightBlack[i].style.color = "#F2994A"
            }
            for(var i = 0 ; i < talkDark.length; i++) {
                talkDark[i].style.backgroundColor = "#F2994A"
                talkDark[i].style.setProperty('color', 'black', 'important');
            }
            for(var i = 0; i < lightBorder.length; i++) {
                lightBorder[i].style.borderTop = "3px solid #F2994A"
                if(i >= 4) {
                    lightBorder[i].style.borderBottom = "3px solid #F2994A" 
                }
            }
            for(var i=  0; i < needHoverWhite.length; i++) {
                needHoverWhite[i].classList.remove("hoverBrown")
                needHoverWhite[i].classList.add("hoverWhite")
            }
            for(var i=  0; i < needTalkWhite.length; i++) {
                needTalkWhite[i].classList.add("letsTalkWhite")
            }
            for(var i = 0; i < roundDiv.length; i++) { 
                roundDiv[i].classList.add("toggle-slide-left")
                roundDiv[i].style.border = "5px solid #F2994A";
                if(isDesktopOrLaptop) {
                    roundDiv[i].innerHTML = `<img src=${halfMoon} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;display: block;height: 50px;"/>`  
                }else {
                    roundDiv[i].innerHTML = `<img src=${halfMoon} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img" style= "margin: auto;text-align: center;display: block;height: 28px;"/>`  
                }
            }

            for(var i = 0; i < phoneMenuList.length; i++) {
                phoneMenuList[i].style.color = "#F2994A"
            }
            
            for(var i = 0; i < needBrown.length; i++) {
                needBrown[i].style.color = "#F2994A"
            }

            mainDiv.style.border = "5px solid #F2994A";
            if(selectedProject){
                selectedProject.style.color = "white"
            }
        }
        setDarkMode(!darkMode)
    }

     
    return (
        <div className="homeDiv"  id="home">
            <div className="testDiv testDivprob" id='homeTest'>
                {isDesktopOrLaptop ?
                    <>
                        <div className="homeWrite lightBlack slide-in from-left">
                            <h2>
                                Hey There, <br/>
                                I’m Abdul
                            </h2>
                            <p >
                                I design beautiful and creative things.<br/>
                                and that’s what I love to do.
                            </p>
                            <a href="#footers" className='talk-btn talkDark letsTalkWhite'>
                                Let's Talk
                            </a>
                            <button className='portfolio-btn lightBlack needHoverWhite' onClick={()=>{window.location="/#projects"}}>
                                Portfolio <i class="fas fa-arrow-up arrow-up"></i>
                            </button>

                            <div className='checkout'>
                                <span className='checkoutSpan'>Check out my </span>
                            <a href = "https://dribbble.com/ricedean" className="no-line-link" target="_blank">
                                <img src={dribble} alt="connect-img" className="connect-img"/>
                            </a> 
                            <a href = "https://linkedin.com/in/abdul-panti-b8030a1ab" className="no-line-link" target="_blank">
                                <img src={linkedin} alt="connect-img" className="connect-img"/>
                            </a> 
                            <a href = "https://twitter.com/pantinextdoor" className="no-line-link" target="_blank">
                                <img src={twitter} alt="connect-img" className="connect-img"/>
                            </a>
                            
                            
                            </div>
                    </div>

                    
                        <div className="homeMemeDiv lightBlack">
                            <div className="homeMemeSubDiv">
                                <img src={darkMode? darkPhone: phoneLap} alt="homeMeme" className="homeMeme"/>

                                <div className='toggle-dark-light  fade-in' id='toggle-dark-light'>
                                    <div className='toggle-main-div' id="toggle-main-div" onClick={()=>{toggleDarkMode()}}>
                                        <div className='toggle-mini-div' id="toggle-mini-div">
                                            <img src={halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img"/>
                                        </div>
                                    </div>

                                </div> 
                            </div>
                            
                        </div>
                    </>
                :
                <>
                <div className='phoneHome'>
                    <div className='toggle-dark-light  fade-in' id='toggle-dark-light'>
                        <div className='toggle-main-div' id="toggle-main-div" onClick={()=>{toggleDarkMode()}}>
                            <div className='toggle-mini-div' id="toggle-mini-div">
                                <img src={halfSun} alt="dark mood moon" className='dark-mood-img' id="dark-mood-img"/>
                            </div>
                        </div>

                    </div> 
                    <div className='phomeHomeImgDiv'>
                        <img src={darkMode ? phoneHomePicDark : phonePanti} alt="phonePanti"/>
                    </div>
                            <h2 className='fade-in need-brown'>
                                Hey There, <br/>
                                I’m Abdul
                            </h2>
                            <p className='fade-in need-brown'>
                                I design beautiful and creative things.<br/>
                                and that’s what I love to do.
                            </p>
                            <a href="#footers" className='talk-btn talkDark letsTalkWhite fade-in'>
                                Let's Talk
                            </a>
                            <button className='portfolio-btn lightBlack needHoverWhite fade-in' onClick={()=>{window.location="/#projects"}}>
                                Portfolio <i class="fas fa-arrow-up arrow-up"></i>
                            </button>

                            <div className='checkout fade-in'>
                                    <span className='checkoutSpan need-brown'>Check out my </span>
                                <a href = "https://dribbble.com/ricedean" className="no-line-link" target="_blank">
                                    <img src={dribble} alt="connect-img" className="connect-img"/>
                                </a> 
                                <a href = "https://linkedin.com/in/abdul-panti-b8030a1ab" className="no-line-link" target="_blank">
                                    <img src={linkedin} alt="connect-img" className="connect-img"/>
                                </a> 
                                <a href = "https://twitter.com/pantinextdoor" className="no-line-link" target="_blank">
                                    <img src={twitter} alt="connect-img" className="connect-img"/>
                                </a>
            
                            </div>
                </div>
                </>
                }
                
            </div>
            <Service image={darkMode ? darkCheck : check} />
            <Skills image={darkMode ? darkFlower : skillFlower} phoneImage={darkMode ? darkPhoneFlower: phoneFlower}/>
            <WorkSec darkMode={darkMode}/>
            {/* <AboutContact/> */}
        </div>
    )
}
