import React, { useState } from 'react';
import AA from "../img/AA.png"
import bdul from "../img/bdulauwal.png"
import useDocumentScrollThrottled from './scrollFunction';
import PhoneMenu  from './PhoneMenu';

export default function Header() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
    const MINIMUM_SCROLL = 50;
    const TIMEOUT_DELAY = 50;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <div className={`header ${shadowStyle} ${hiddenStyle}`} id="header">
            <div className="headerLogo">
                <a href="/">
                    <img src={AA} alt="Abdul A" className="logo"/>
                    <img src={bdul} alt="bdul" className="logo"/>
                </a>
            </div>
            <div className="laptop-menu">
                <ul>
                     <li>
                        <a href="/#home" className='lightBlack needHoverWhite'>
                            home.
                        </a>
                    </li>
                    <li>
                        <a href="/#service" className='lightBlack needHoverWhite'>
                            services.
                        </a>
                    </li>
                    <li>
                        <a href="/#skills"className='lightBlack needHoverWhite'>
                            skills.
                        </a>
                    </li>
                    <li>
                        <a href= "/#projects" className='lightBlack needHoverWhite'>
                            projects.
                        </a>
                    </li>

                    <li>
                        <a href="/#footers" className='talk talkDark letsTalkWhite'>Let's Talk</a>
                    </li>
                </ul>
            </div>
            <div className="phone-menu">
                
            </div>
        </div>
    )
}
