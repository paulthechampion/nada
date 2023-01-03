import React from 'react'
import tagProcess from "../img/tag-process.png"
import arrow from "../img/arrow.png"
import note from "../img/note-pad.png"
import outline from "../img/outline.png"
import dunsin from "../img/dunsin.png"
import fish from "../img/fish.png"
import fishback from "../img/fishback.png"
import download from "../img/download.png"
import search from "../img/search.png"
import sitemap from "../img/sitemap.png"
import wire1 from "../img/1.png"
import wire2 from "../img/2.png"
import wire3 from "../img/3.png"
import tagtwo from "../img/tag-two.png"

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
                         TAG COMICS UX CASE STUDY
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
                                <td>UI designer</td>
                                <td>8 weeks</td>
                                <td>Figma, Google Meet, </td>
                            </tr>
                            <tr>
                                <td>UX Researcher</td>
                                <td></td>
                                <td>Imessage, Miro</td>
                            </tr>
                            <tr>
                                <td>Interaction Designer</td>
                                
                            </tr>
                       </tbody>
                    
                   </table>
                   :
                   <div className="phone-case-table">
                   <div>
                        <h3>role :</h3>
                        <p>UI designer</p> 
                        <p>UX Researcher</p>
                        <p>Interaction Designer</p>
                   </div>
                   <div>
                       <h3>length :</h3>
                       <p>8 weeks</p>

                   </div>
                   <div>
                       <h3>Tools used :</h3>
                       <p>Figma, Google Meet</p>
                       <p>Imessage, Miro,</p>
                       <p>Optimal Sort</p>
                    </div>
                   </div>
                   }
                </div>
            </div>
            <section>
                <article>
                    <h1>
                         The Project
                    </h1>
                    <p>
                        Tag comics is a comic reading application that I created
                        as part of my UX immersion course to better improve my skills. 
                        As the sole UX designer, I designed this project from inception to
                        final design through research, ideation and UX design principles.
                    </p>

                    <h1>
                        Context
                    </h1>
                    <p>
                        A famous quote by the famous South-African president goes “Our hope is that 
                        the elementary reading of comics will lead to the joy of reading good books”. 
                        In order to familiarise youths with reading, the effect of something exciting may 
                        push them towards the old traditional way of reading comics but in a digitized form.
                        <br/>
                        <br/>
                        Comic books have been around for a long time. It’s responsible for some of the most 
                        magical and amazing stories told in the last century. Everybody knows who Superman and 
                        Spider-Man are. The movies have done great at the box office as well. As a result, people 
                        are reading more comic books. The good news is that you can read them on mobile. I was tasked 
                        with providing a mobile application that would allow users ease and efficienvy, simplicity, 
                        so much that they would enjoy the comics.
                    </p>

                    <h1>
                        The Process
                    </h1>
                    <div className="process-div">
                        <img src={tagProcess} alt="tag-process" className="tag-process-pic"/>
                    </div>
                    <h1>
                        Research
                    </h1>
                    <h3>
                        Competitor Analysis
                    </h3>
                    <p>
                        To get a better understanding of the competitor landscape, I conducted analyses on two of the most
                        popular comic apps on the market, and found that while both provided a rich taste of entertainment 
                        assuring contents, there was a lack of spontaneity in grasping when to provide a different content 
                        and a different feel to broaden user preferences. This could be in the long run reduces the impact 
                        of freshness to the users.
                    </p>
                    <h3>
                        Survey and Interviews
                    </h3>
                    <p>
                        With the goal of understanding what comic readers associate as a true comic reading environemt, which 
                        feature they thought was important, and the issues they were facing. I read different types of comics, 
                        with various types of drawing styles, I wanted to experience the broad wide topics and looks of various 
                        comics that have been uploaded, I wanted to also interview my friends whose answers would be categorized 
                        in the amount of hours they used to read comics daily (2-3 hours, 4-6 hours, 8 hours and more).
                    </p>
                    <h3>
                        Key Findings and Insights
                    </h3>
                    <p>
                        The surveys and interviews helped me understand more about the needs and frustrations of my users, and I 
                        was able to pull a few key findings that would help shape my project:
                    </p>
                    {
                    isDesktopOrLaptop?
                    <table className="table-two">
                        <thead>
                            <tr>
                                <th>
                                    <img src={outline} className="table-two-pic"/><br/>
                                    Keep It Simple
                                </th>
                                <th>
                                    <img src={note} className="table-two-pic"/><br/>
                                    Tailor to Needs
                                </th>
                                <th>
                                    <img src={arrow} className="table-two-pic"/><br/>
                                    Fluidity
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>Using the simplistic approach
                                    with the data representation
                                    and the urge of users wanting to see 
                                    the available content accessible to them.
                                </td>
                                <td>Users had different preferences as to what 
                                    their perfect comic was, the design was tailored 
                                    to suit their preferences by including different 
                                    drawing styles of comic types.
                                </td>
                                <td>
                                Graceful and flowing design, the flow of design is 
                                very important as it increases the user enthusiatic 
                                involvement in the app.
                                </td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                        </tbody>
                    </table>
                     :
                     <div className="phone-case-table-two">
                     <div>
                        <img src={outline} className="table-two-pic"/><br/>
                            <h2>Keep It Simple</h2> 
                            <p>Using the simplistic approach with the data representation
                                and the urge of users wanting to see the available content accessible to them.
                            </p>
                     </div>
                     <div>
                            <img src={note} className="table-two-pic"/><br/>
                            <h2>Tailor to Needs</h2>
                            <p>Users had different preferences as to what their perfect comic was, the design was 
                                tailored to suit their preferences by including different drawing styles of comic 
                                types.
                            </p>
  
                     </div>
                     <div>
                         <img src={arrow} className="table-two-pic"/><br/>
                         <h2>Fluidity</h2>
                         <p>Graceful and flowing design, the flow of design is very 
                             important as it increases the user enthusiatic involvement in the app.
                         </p>
                      </div>
                     </div>
                     }
                    <h1>
                         User Stories
                    </h1>
                    <p>
                        I created user stories for the sole purpose of better understanding the potential 
                        needs of readers, to help decide on the functional requirements for the app, also 
                        used as refferal point.
                    </p>
                    <div className="process-div">
                        <img src={dunsin} alt="tag-process" className="tag-process-pic dunsin"/>
                    </div>
                    <h1>
                         Focus
                    </h1>
                    {
                    isDesktopOrLaptop?
                    <table className="table-two table-three">
                        <thead>
                            <tr>
                                <th>
                                    <div className="">
                                    <img src={fishback} className="table-two-pic test-back"/><br/>
                                    </div>
                                    Comic Style
                                </th>
                                <th>
                                    <img src={search} className="table-two-pic"/><br/>
                                    Search and Browse
                                </th>
                                <th>
                                    <img src={download} className="table-two-pic"/><br/>
                                    Downloads
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Comic styles have been included to best
                                    explore differet types of comic drawing 
                                    styles that allow users to broaden their 
                                    preferences
                                </td>
                                <td>A Search feature that would allow users search 
                                    for their desired comics and comic style.
                                </td>
                                <td>
                                    This feature allows users to download their favorite 
                                    comics on the go.
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                    :
                    <div className="phone-case-table-two">
                    <div>
                        <img src={download} className="table-two-pic"/><br/>
                           <h2>Downloads</h2> 
                           <p>This feature allows users to download their favorite comics on the go.
                           </p>
                    </div>
                    <div>
                        <img src={search} className="table-two-pic"/><br/>
                           <h2>Search and Browse</h2>
                           <p>A Search feature that would allow users search for their desired comics and 
                               comic style.
                           </p>
 
                    </div>
                    <div>
                        <img src={fishback} className="table-two-pic test-back"/><br/>
                        <h2>Fluidity</h2>
                        <p>Comic styles have been included to best explore differet types of comic drawing 
                            styles that allow users to broaden their preferences
                        </p>
                     </div>
                    </div>
                    }
                    <h1>
                         Sitemap
                    </h1>
                    <div className="process-div">
                        <img src={sitemap} alt="tag-process" className="tag-process-pic sitemap"/>
                    </div>
                    <h1>
                         Ideate
                    </h1>
                    <h3>
                        Wireframes
                    </h3>
                    <p>
                        The main goal was to achieve simplicity, the number of screens were kept 
                        to a minimum and i wanted to focus on highlighting the core features.
                    </p>
                    <div className="wire-frame-div">
                        <div>
                            <img src={wire1} alt="wire-frames" className="wire-frame-pic"/>
                        </div>
                        <div>
                            <img src={wire2} alt="wire-frames" className="wire-frame-pic"/>
                        </div>
                        <div>
                            <img src={wire3} alt="wire-frames" className="wire-frame-pic"/>
                        </div>
                    </div>
                    <h1>
                        Final Design
                    </h1>
                    <div className="final-design-div">
                        <img src={tagtwo} className="final-design-pic"/>
                        <h1>Thank you!</h1>
                    </div>


                </article>
            </section>
        </div>
    )
}
