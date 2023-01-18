import {React, useState} from 'react'
import comic from "../img/comic.jpg"
import weed from "../img/tch.png"
import sapa from "../img/Group 86.png"
import vector from "../img/vector.png"
import { useMediaQuery } from 'react-responsive'
import davito from "../img/canada-flag.jpeg"
import keer from "../img/kreer.jpg"
import nadaPic from "../img/nada-nada.jpg"
import ruixPic from "../img/rubixx.png"
import surveyPic from "../img/survey.jpg"
import myPic1 from "../img/chat-icon.jpg"
import todoPic from "../img/todo.png"
import star from "../img/projectsStar.png"
import search from "../img/image 2.png"



export default function WorksSec(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })
      const [projects, setProjects] = useState({name: isDesktopOrLaptop ? "Nada Create": "Nada", img: nadaPic, link: "https://nada-create.herokuapp.com/",words:"Nada is an e-commerce web app designed with the user in mind, featuring a sleek and intuitive interface that makes browsing and purchasing jerseys a seamless experience. The Web app utilizes bold imagery and easy-to-use filters to showcase products, while secure payment options and fast checkout ensure a stress-free shopping experience. Our web app is the perfect shopping companion for the modern consumer."})
      const [oldActiveH2, setOldActiveH2] = useState(null)

      const projectsData = [ 
        {name: isDesktopOrLaptop ? "Nada Create": "Nada", img: nadaPic, link: "https://nada-create.herokuapp.com/", words:"Our e-commerce app is designed with the user in mind, featuring a sleek and intuitive interface that makes browsing and purchasing jerseys a seamless experience. The app utilizes bold imagery and easy-to-use filters to showcase products, while secure payment options and fast checkout ensure a stress-free shopping experience. With push notifications for promotions and personalized recommendations, our app is the perfect shopping companion for the modern consumer."},
        {name: "Tag Comics", img: comic, caseLink: "/tag-case", words:"Our comic app offers a sleek, user-friendly interface for avid readers to easily discover and access a vast library of their favorite comics. With intuitive navigation and personalized recommendations, readers can immerse themselves in their favorite stories and explore new ones with ease."},
        {name: isDesktopOrLaptop? "Davito Services": "Davito", img: davito, link: "https://www.davitoservices.com", words:"Davito service is a Canadian Immigration company, this website was created with the initiative of being user friendly and also to allow for the smooth flow and understanding of information from the business to the user."},
        {name: "Wee'Count", img: weed, caseLink: "/wee'count", words:"A user-friendly and visually appealing interface that makes it easy for users to track their sober days. The app features a clean and modern design, with easy-to-use navigation and clear visual cues to guide users through the various features. The main focus of the app would be a calendar feature, where users can track their sober days and set reminders to stay on track."},
        {name: "Clown Chat", img: myPic1, link: "https://clownchat.herokuapp.com/", words:"Introducing our new clown chat app, designed for endless entertainment and fun. With colorful and playful graphics, users can interact enjoy endless conversations, jokes and stories. Perfect for both kids and adults, the clown chat app is guaranteed to bring joy and laughter to your day."},
        {name: "Sapay", img: sapa, caseLink: "/sapay", words:"Effortlessly manage your transactions with our sleek and user-friendly app. Intuitive design allows for seamless navigation and secure payment processing. Keep track of your finances in one convenient location"},
        {name: "Rubix", img: ruixPic, link: "https://rubixx.herokuapp.com/", words:"Rubixxx is a simple library app that allows users to access and manage their library account from their mobile device or computer. With Rubixxx, users can search for other materials,  and access other library services. Some features of Rubixxx may include recommendations based on users' reading history, access to digital resources such as online databases and e-magazines, and integration with social media platforms that can be uploaded by users"},  
        {name: "Emaily", img: surveyPic, link: "https://email-dev-list.herokuapp.com", words:"Emaily is a survey dispatch service, it enables the users to send surveys to a series of emails and receive feedback."}, 
        {name: "Todo App", img: todoPic, link: "https://champs-todo.herokuapp.com", words:"This to-do app is a sleek and user-friendly tool to help you stay organized and on top of your tasks. With a clean and minimalistic design, it's easy to add, edit and prioritize your to-dos. Whether you're a busy professional or a student, our app will make sure you never miss a deadline again"}
    ]

    // function activeClass(event) {
    //     if(activeH2) {
    //         const newActiveH2 = event.target
    //         if(darkMode) {
    //             activeH2.style.color="#D07D01"
    //             newActiveH2.style.color="white"
                
    //         } else {
    //             activeH2.style.color="white"
    //             newActiveH2.style.color="#D07D01"
    //         }
    //         setActiveH2(newActiveH2)
    //     }
    //     return
    // }
    function flipProjects(event,projects) {
        activeClass(event)
        document.getElementById("card").classList.toggle("card-flip-toggle")
        setProjects(projects)
        window.location.href = "/#card"
    }
    
    
    function activeClass(event) {
        if(props.activeH2) {
            const newActiveH2 = event.target
            const propsH2 = props.activeH2
            if(!oldActiveH2) {
                console.log("here dummt")
                if(props.darkMode) {
                    propsH2.style.color="#D07D01"
                    newActiveH2.style.color="white"
                    
                } else {
                    propsH2.style.color="white"
                    newActiveH2.style.color="#D07D01"
                }
                setOldActiveH2(newActiveH2)
            }
            console.log("old",propsH2, "new", newActiveH2)
            if(oldActiveH2) {
                if(props.darkMode) {
                    console.log(props.darkMode)
                    oldActiveH2.style.color="#F2994A"
                    newActiveH2.style.color="white"
                    
                } else {
                    oldActiveH2.style.color="white"
                    newActiveH2.style.color="#F2994A"
                }
                setOldActiveH2(newActiveH2)
            }
        }
        return
    }
    
    return (
        <div id="projects" className='projects-main-div lightBlack'>
            
            <img src={star} className="star fade-in" alt="project star"/>
            <h2 className='lightBlack fade-in'>Projects</h2>
            <div className='projects-div fade-in' id='projects-div'>
                <div className='projectsFlex flex'>
                    {projectsData.map(project=>
                        <div key={project.name} onClick={(event)=>{flipProjects(event,project)}} className={projects.name === project.name ? "brown needHoverWhite need-brown p" : "needHoverWhite need-brown p"} id={projects.name === project.name ? "selectedProject" : null}>
                            {project.name}<i className="fas fa-arrow-up arrow-up workArrow"></i>
                        </div>   
                    )}
                </div>

                <div className='card-flip flex' id="card">
                    <div className='slide-in from-left'>
                        <img src={projects.img} alt="project pic" className='card-img'/>
                    </div>
                    <div className='card-info slide-in from-right'>
                        <h2 className='need-brown p'>{projects.name}</h2>
                        <p className='need-brown p'>{projects.words}</p>
                        {projects.caseLink? <a  href={projects.caseLink} target="_blank" className='need-brown p needHoverWhite'>View case study <img src={vector} className="vector" alt="vector"/></a>:<a className='need-brown p needHoverWhite' href={projects.link} target="_blank">View Live App <img src={vector} className="vector" alt="vector"/></a>}
                    </div>
                </div>
            <div className='project-search-div'>
                <img src={search} className="project-search"/>
            </div>  
            </div>
        </div>
    )
}
