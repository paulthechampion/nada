import {React, useState} from 'react'
import comic from "../img/comic.jpg"
import weed from "../img/tch.png"
import sapa from "../img/Group 86.png"
import vector from "../img/vector.png"
import { useMediaQuery } from 'react-responsive'
import davito from "../img/immigration.jpg"
import keer from "../img/kreer.jpg"
import nadaPic from "../img/nada-nada.jpg"
import ruixPic from "../img/rubixx.png"
import surveyPic from "../img/survey.jpg"
import myPic1 from "../img/chat-icon.jpg"
import todoPic from "../img/todo.png"
import star from "../img/projectsStar.png"
import search from "../img/image 2.png"



export default function WorksSec() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })
      const [projects, setProjects] = useState({name: "NADA Create", img: nadaPic, link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more"})


      const projectsData = [ 
        {name: "NADA Create", img: nadaPic, link: "https://nada-create.herokuapp.com/", github: "https://github.com/paulthechampion/nada-create", words:"Nada Create is an ongiong Ecommerce company which sells sportwears, especially that of soccer. This Application is being created using Node js, Express, Ejs for the view engine, Mongodb, Paystack for the Payment integration system and many more"},
        {name: "Kreer", img: keer, link: "https://www.kreer.ng/",github : "", words:"Keer Ng is a company based in Nigeria that offers business development services"},
        {name: "Davito Immigration Services", img: davito, link: "https://www.davitoservices.com",github : "https://github.com/paulthechampion/Davito-services", words:"A Canadian Immigration company"},
        {name: "Read Rubixx", img: ruixPic, link: "https://rubixx.herokuapp.com/",github : "https://github.com/paulthechampion/rubix", words:"Rubixx is a Full-stack online book library, it saves authors and their books. Also enables users to read books. This as created using the MERN stack as well as PDF.js library to read the books"},  
        {name: "Emaily", img: surveyPic, link: "https://email-dev-list.herokuapp.com",github : "https://github.com/paulthechampion/email-list", words:"Emaily is a survey dispatch service, it enables the users to send surveys to a series of emails and receive feedback. This app is still in the test phase, it was created using Mongodb, Express Js, React Js, Redux, Redux Forms, Stripe for payment integration, SendGrid,Node js and many more"}, 
        {name: "Clown Chat", img: myPic1, link: "https://clownchat.herokuapp.com/",github : "https://github.com/paulthechampion/ClownChat", words:"A comical messaging app, created using Express, Node js, Ejs view engine and Socket.io"},
        {name: "Todo App", img: todoPic, link: "https://champs-todo.herokuapp.com",github : "https://github.com/paulthechampion/todoApp", words:"A Full-stack Todo app, saves Todo tasks and arranges them in a tabular format"}
    ]

    function flipProjects(projects) {
        document.getElementById("card").classList.toggle("card-flip-toggle")
        setProjects(projects)
        window.location.href = "/#card"
    }
    return (
        <div id="projects" className='projects-main-div lightBlack'>
            
            <img src={star} className="star fade-in" alt="project star"/>
            <h2 className='lightBlack fade-in'>Projects</h2>
            <div className='projects-div fade-in' id='projects-div'>
                <div className='projectsFlex flex'>
                    {projectsData.map(project=>
                        <div onClick={()=>{flipProjects(project)}} className={projects.name === project.name ? "brown needHoverWhite" : "needHoverWhite"} id={projects.name === project.name ? "selectedProject" : null}>
                            {project.name}<i className="fas fa-arrow-up arrow-up workArrow"></i>
                        </div>   
                    )}
                </div>

                <div className='card-flip flex' id="card">
                    <div className='slide-in from-left'>
                        <img src={projects.img} alt="project pic" className='card-img'/>
                    </div>
                    <div className='card-info slide-in from-right'>
                        <h2>{projects.name}</h2>
                        <p>{projects.words}</p>
                        {projects.caseLink? <span>View case study <img src={vector} className="vector" alt="vector"/></span>:<span>View Live App <img src={vector} className="vector" alt="vector"/></span>}
                    </div>
                </div>
            <div className='project-search-div'>
                <img src={search} className="project-search"/>
            </div>  
            </div>
        </div>
    )
}
