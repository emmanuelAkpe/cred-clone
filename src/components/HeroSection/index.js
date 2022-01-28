import React from 'react';
import './heroSection.css'
import Button from '../common/Button'

const HeroSection = () => {
  return <div className='hero-section-wrapper'> 
    <div className="hero-section flex flex-col absolute-center max-width ">
      <div className="hero-claim-label flex absolute-center ">
        <div className="">pay credit card bill. earn guaranteed ₹200 back. </div>
        <div className="claim-anchor flex absolute-center"> <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="cred logo" className='claim-arrow'></img> claim now</div>
      </div>
      <div className="hero-heading">
      rewards for paying credit card bills.
      </div>
      <div className="hero-subheading">
      join 7.5M+ members who win rewards and cashbacks everyday
      </div>
      <Button buttonText='Download Cred'/>
    </div>
  </div>;
};

export default HeroSection;
