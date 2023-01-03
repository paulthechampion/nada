import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function 
(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
      })

      function move() {
          var elem = document.getElementById("myBar");
          var width = 1;
          var id = setInterval(frame, 30);
          function frame() {
            if (width >= 100) {
              width=1
            } else {
              width++;
              elem.style.width = width + '%';
            }
          }
        }
        function movePhone() {
              var elem = document.getElementById("PhoneBar");
              var height = 1;
              var id = setInterval(frame, 30);
              function frame() {
                if (height >= 100) {
                    height=1
                } else {
                    height++;
                  elem.style.height = height + '%';
                }
              }
            }
            document.addEventListener("DOMContentLoaded", function(event) { 
                if(isDesktopOrLaptop) {
                    move()
                  } else {
                    movePhone()
                  }
              });
            
  return (
    <div className="skills-main-div lightBlack" id='skills'>
        <h1 className='slide-in from-left'>
            Skills 
        </h1>
        <p className='skillsP slide-in from-left'>
            A professional in UI/UX design. I love designing, <br/>
            using user experience to solve problems, and <br/>
            seeing my invention come to life.
        </p>
        {isDesktopOrLaptop ?
        <>
            <div className='skillsLoadingDiv skillsLine'>
                <div className="w3-light-grey fade-in">
                        <div className='skills-point-flex'>
                            <div className='skill-point' id='skill-first'><div></div></div>
                            <div className='skill-point'><div></div></div>
                            <div className='skill-point'><div></div></div>
                            <div className='skill-point'><div></div></div>
                        </div>
                        <div className='loading-main'>
                            <div id="myBar" className="w3-container w3-green" ></div>
                        </div>
                </div>
                <div className='flex skill-words-div'>
                    <div className='fade-in'>
                        <p className='slill-words-p'>UX design</p>
                        Visual expert
                    </div>
                    <div className='fade-in'>
                        <p className='slill-words-p'>Interaction Design</p>
                        Figma
                    </div>
                    <div className='fade-in'>
                        <p className='slill-words-p'>Visual Design</p>
                        Prototyping
                    </div>
                    <div className='fade-in'>
                        <p className='slill-words-p'>Visual Communication</p>
                        Wireframing
                    </div>
                </div>
             </div>
            <div className='skillsFlowerDiv fade-in'>
                <img src={props.image} className="skillsFlower"/>
            </div>
        </>
        :
        <>
        <div className='phoneSkillDiv flex skillsLine'>
            <div>
                <div className='fade-in'>
                    UX design
                </div>
                <div className='fade-in'>
                    Interaction Design
                </div>
                <div className='fade-in'>
                    Visual Design
                </div>
                <div className='fade-in'>
                    Visual Communication
                </div>
            </div>
            <div className='fade-in'>
                <div className='skill-point ' id='skill-first'><div></div></div>
                <div className='skill-point'><div></div></div>
                <div className='skill-point'><div></div></div>
                <div className='skill-point'><div></div></div>

            </div>
            <div>
                <div className='fade-in'>
                    Visual expert
                </div>
                <div className='fade-in'>
                    Figma
                </div>
                <div className='fade-in'>
                    Prototyping
                </div>
                <div className='fade-in'>
                    Wireframing
                </div>
            </div>
        </div> 
        <div className='Phoneloading'>
            <div id="PhoneBar" className="w3-container w3-green" ></div>
        </div>
        <div className='skillsFlowerDiv fade-in'>
            <img src={props.phoneImage} className="skillsFlower"/>
        </div>
        </>   
            }
        
        
        
    </div>
  )
}

