import React from 'react'

import wire1 from "../img/login.png"
import wire2 from "../img/signup.png"
import bank1 from "../img/bank app.png"
import bank2 from "../img/bankin.png"
import process from "../img/sapayprocess.png"
import target from "../img/target.png"
import empathy from "../img/empathy.png"

import { useMediaQuery } from 'react-responsive'


export default function TagCase() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })

    return (
        <div className="homeDiv">
            <div className="testDiv case-div">
                <div className="homeWrite case-first-div">
                    <h2>
                        SaPay UX CASE STUDY
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
                                    <td>3 weeks</td>
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
                       <p>3 weeks</p>

                   </div>
                   <div>
                       <h3>Tools used :</h3>
                       <p>Figma,</p>
                       <p>Whatsapp,</p>
                       <p>Twitter, Survey</p>
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
                        The objective of this research is to investigate the pain and annoyance customers 
                        have when enrolling into Mobile Banking Apps. Also, to make the customer verification 
                        process easier, to finish their KYC registration, to enhance the experience of recharging 
                        airtime worldwide, and to form a positive experience while they use the product. I approached 
                        the task in two steps, as well as inventing a fictional brand called sapay, to show how I 
                        patiently created my answer.
                    </p>

                    <h1>
                        Introduction
                    </h1>
                    <p>
                        SaPay is a start-up Online Banking Platform (rather than a traditional walk-in bank) that aims to 
                        let you save more, pay bills, and invest from the convenience of your smartphone. SaPay's goal is 
                        to create simple phone-based money transfer, payment, and administration services. Users will be 
                        empowered by the product's greatness and efficiency.
                    </p>

                    <h1>
                        Challenge
                    </h1>
                    <p>
                        By reducing the number of steps necessary, we were able to create a simpler onboarding and registration 
                        experience for new and existing users. Also, to shorten the time it takes for users to complete tasks 
                        such as registration, login, password reset, verification, KYC documents, and uploads, among other things.
                    </p>

                    <h1>
                        Problem
                    </h1>
                    <p>
                        According to a survey conducted in 2018 by MagnifyMoney (MagnifyMoney is a leading site that helps consumers 
                        understand personal finances by providing guiding tools, comparing finances, and sharing perspectives on 
                        monetary affairs), a number of banking apps failed due to poor user experience, a bad interface, and weak 
                        security measures.<br/><br/>

                        Here are some examples of user evaluations from some of the Mobile Banking Apps that were collected throughout the survey:
                    </p>
                    <div className="bank-div">
                        <img src={bank2} alt="bank pic" className="bank2"/>
                        <img src={bank1} alt="bank pic" className="bank1"/>
                    </div>
                    <h1 className="sapa-process-h1">
                        My Process
                    </h1>
                    <div className="process-div">
                        <img src={process} alt="tag-process" className="tag-process-pic sapayprocess"/>
                    </div>
                    
                    <h1>
                        Emphathise
                    </h1>
                    <p>
                        In this phase, I did some primary research with potential users to validate 
                        the secondary research I did earlier on.
                    </p>
                    <h1>
                        User Research
                    </h1>
                    <p>
                        Because the product will rely on digital technologies, the target audience was obvious: 
                        smartphone users. For my qualitative study, I interviewed Eight potential users, and for 
                        my quantitative research, I questioned roughly 15 people at random.<br/><br/>

                        The following are some of the questions I posed:
                    </p>
                        <ul className="sapaylist">
                            <li>What was their favorite banking app?</li>
                            <li>Why do they favor it?</li>
                            <li>What problems did they have, and what improvements would they want to see in the app?</li>
                        </ul>
                        <br/>
                    <p>
                        I also inquired about any problems they may have had with current mobile banking apps in the previous year.
                        <br/>
                        <br/>
                    
                        The following are some of the research's findings:
                    </p>
                    
                    <div className="process-div">
                        <img src={target} alt="tag-process" className="tag-process-pic dunsin"/>
                    </div>
                    <h1>
                        Define
                    </h1>
                    <h3>
                        Persona of the User
                    </h3>
                    <p>
                        I established a user persona to help me think through my ideas and 
                        guarantee that I didn't come up with a biased solution. It served as a 
                        guide for me to make better design decisions.
                    </p>
                    <h3>
                        Empathy Map 
                    </h3>
                    <p>
                        I jotted down my observations based on the research's primary findings, and 
                        I made an empathy map for Doyin. To put myself in Doyin's shoes, I tried to 
                        imagine what she thinks, feels, says, and does in various situations.<br/><br/>

                        The goals of this activity were to:
                    </p>
                        <ul className="sapaylist">
                            <li>Remove any prejudice from my designs and connect myself with the genuine nature of user understanding.</li>
                            <li>Discover user pains and requirements that the user may not even be aware of.</li>
                            <li>Recognize what motivates consumers' actions.</li>
                            <li>Guidance in the direction of real innovation and a superior answer.</li>
                        </ul>
                    
                    <div className="process-div">
                        <img src={empathy} alt="tag-process" className="tag-process-pic dunsin"/>
                    </div>
                    <div className="wire-frame-div">
                        <div>
                            <img src={wire1} alt="wire-frames" className="wire-frame-pic"/>
                        </div>
                        <div>
                            <img src={wire2} alt="wire-frames" className="wire-frame-pic"/>
                        </div>
                    </div>
                    <h3>
                        Verification and KYC documentation
                    </h3>
                    <p>
                        After the user has successfully created an account, the user receives an OTP code to verify 
                        the account and then a welcome/onboarding email stating that they complete their KYC 
                        documentation with a link that launches the mobile app. Moreso, the KYC documentation block 
                        will be shown on the dashboard and a follow up push notification in intervals, to their mobile 
                        phones can also remind users to complete the process.
                    </p>
                </article>
            </section>
        </div>
    )
}
