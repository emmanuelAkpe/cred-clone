import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [showMobileMenu, setShowMobileMenu ] =useState(false);
    const toggleMobileMenu =()=>{
        setShowMobileMenu(!showMobileMenu);
    }
  return <div className='mobile-menu-wrapper'>
      <div className="header flex max-width">
          <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="logo" className='header-logo' />
          <div className="header-info flex non-mobile">
              <div className="header-nav-item">credit score check</div>
              <div className="header-nav-item"> credit card bill payment</div>
          </div>
          <div className="only-mobile mobile-menu-button-wrapper">
          <button class={`hamburger hamburger--spin ${showMobileMenu ?'is-active':'' }`}  type="button" onClick={toggleMobileMenu}>
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
          </div>
          <div className={`mobile-menu only-mobile  ${showMobileMenu ?'overlay':''}`}>
            <div className="mobile-navbar ">
            <div className="mobile-nav-item " onClick={toggleMobileMenu}>credit score check</div>
              <div className="mobile-nav-item"onClick={toggleMobileMenu}> credit card bill payment</div>
            </div>
          </div>
      </div>
  </div>;
};

export default Header;
