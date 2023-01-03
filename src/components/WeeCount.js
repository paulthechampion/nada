import React from 'react'
import process from "../img/process.png"
import userFlow from "../img/weeprocess.png"
import Layout4 from "../img/Layout 4.png"
import Layout9 from "../img/Layout 9.png"
import Frame4 from "../img/Frame 4.png"

import { useMediaQuery } from 'react-responsive'


export default function WeeCount() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })

    return (
        <div className="homeDiv">
            <div className="testDiv case-div">
                <div className="homeWrite case-first-div">
                    <h2>
                        wee’Count UX CASE STUDY
                    </h2>
                {
                isDesktopOrLaptop?
                   <table>
                        <thead>
                            <tr>
                                    <th>role :</th>
                                    <th>length :</th>
                                    <th>Tools used :</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                    <td>UX Designer</td>
                                    <td>4 weeks</td>
                                    <td>Figma, Whatsapp, </td>
                            </tr>
                            <tr>
                                    <td>Interaction Designer</td>
                                    <td></td>
                                    <td>Twitter, Survey Monkey.</td>
                            </tr>
                            <tr>
                                    <td></td>
                                    
                            </tr>
                        </tbody>
                        
                   </table>
                   :
                   <div className="phone-case-table">
                   <div>
                        <h3>role :</h3>
                        <p>UX Designer</p> 
                        <p>Interaction Designer</p>
                   </div>
                   <div>
                       <h3>length :</h3>
                       <p>4 weeks</p>

                   </div>
                   <div>
                       <h3>Tools used :</h3>
                       <p>Figma, Whatsapp,</p>
                       <p>Twitter, Survery</p>
                       <p>Monkey.</p>
                    </div>
                   </div>
                   }
                </div>
            </div>
            <section>
                <article>
                    <h1>
                        Overview
                    </h1>
                    <p>
                        wee’Count app was one of my first project, i decided to preview it 
                        here because of its significance to me and how it impacted the lives 
                        of my friends and family.
                        wee’Count is an app that tracks your drug intake(THC), as the sole UX 
                        designer I became attached to the project, I designed this project from 
                        inception to final design through research, ideation and UX design principles.
                    </p>

                    <h1>
                        The Process
                    </h1>
                    <div className="process-div">
                        <img src={process} alt="weeCount photo" className="tag-process-pic"/>
                    </div>
                    <p className="margin-top">
                        After listening carefully and meeting physically with the colleagues that had 
                        experiences with THC , and some brainstorming, assessing their needs, I diagnosed 
                        the imagery of the design. I performed heuristic analysis prior to that prescription 
                        on the product and also did some further user testing while carefully taking notes of 
                        the underlying problems. The research really helped with a lot of valuable insights and 
                        ideas used in the project and to narrow down a roadmap.<br/><br/>
                        The UX phase began with getting to know the users and their behaviours.
                    </p>
                    <h1>
                        User Flow
                    </h1>
                    <div className="process-div">
                        <img src={userFlow} alt="weeCount photo" className="tag-process-pic userFlow"/>
                    </div>
                    <h1>
                        Splash screen and onboarding
                    </h1>
                    <p>
                        Because the app is a new sort of product in the market, it was critical to rapidly expose 
                        customers to some of the features and keep them up to date on what to anticipate before they 
                        started using it.
                    </p>
                    <div className="process-div">
                        <img src={Frame4} alt="tag-process" className="tag-process-pic dunsin"/>
                    </div>
                    <h1>
                        Registration
                    </h1>
                    <p>
                        The sign up process includes SSO (Single Identity Sign On) by prioritizing the most popular 
                        sign-up method - Google. Also has an option for users with no Google accounts.
                    </p>
                    <div className="process-div">
                        <img src={Layout4} alt="tag-process" className="tag-process-pic dunsin"/>
                    </div>
                    
                    <h1>
                        Featured Design
                    </h1>
                    <div className="final-design-div">
                        <img src={Layout9} alt="tag-process" className="final-design-pic"/>
                        <h1>Thank you!</h1>
                    </div>

                </article>
            </section>
        </div>
    )
}
