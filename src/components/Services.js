import React from 'react'
import { useMediaQuery } from 'react-responsive'



export default function Services(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
      })
  return (
    <div className='servive-main-div lightBlack' id='service'>
        {isDesktopOrLaptop ?
        <>    
            <div className='slide-in from-left'>
                <h1>Services</h1>
                <p>I increase demand, online traffic, customer connections,
                    and brand exposure to assist ambitious businesses 
                    like yours to turn a profit.
                </p>
                <img src={props.image} alt="servie check" className='serviceCheck'/>
            </div>
            <div>
                <ul className='service-ul' id='service-ul'>
                    <li className='lightBorder slide-in from-right'>
                        <span>01/</span> <span>Web UI/UX Design</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>02/</span> <span>Brand and design system development.</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>03/</span> <span>Mobile App UI/UX Design</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>04/</span> <span>Dashboard & Screen Layout</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>05/</span> <span>Screen Responsiveness</span>
                    </li>
                </ul>
            </div>
        </>
        :<>
            <div className='phoneServiceFlex'>
                <div className='slide-in from-left'>
                    <h1>Services</h1>
                    <p>I increase demand, online traffic, customer connections,
                        and brand exposure to assist ambitious businesses 
                        like yours to turn a profit.
                    </p>
                </div>
                <div>
                    <img src={props.image} alt="servie check" className='serviceCheck'/>
                </div>
            </div>
            <div>
                <ul className='service-ul' id='service-ul'>
                    <li className='lightBorder slide-in from-right'>
                        <span>01/</span> <span>Web UI/UX Design</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>02/</span> <span>Brand and design system development.</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>03/</span> <span>Mobile App UI/UX Design</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>04/</span> <span>Dashboard & Screen Layout</span>
                    </li>
                    <li className='lightBorder slide-in from-right'>
                        <span>05/</span> <span>Screen Responsiveness</span>
                    </li>
                </ul>
            </div>
        </>
        }
    </div>
  )
}
