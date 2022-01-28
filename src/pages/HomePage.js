import React from 'react';
import AppRating from '../components/AppRating';
import BrandsLove from '../components/BrandsLove';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import CredExperience from '../components/credExperience';
import CredSecurity from '../components/CredSecurity';
import CredStory from '../components/CredStory';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection';
import MobileScroll from '../components/MobileScroll';
import ProductShowcase from '../components/productShowcase';
import WindowPeak from '../components/WindowPeak';

const HomePage = () => {
  return <div>
    <Header/>
      <HeroSection/>
      <ProductShowcase/>
      <FeelSpecial/>
      <BrandsLove/>
      <CredExperience/>
      <MobileScroll/>
      <WindowPeak/>
      <CredSecurity/>
      <CredStory/>
      <AppRating/>
      <Footer/>

  </div>;
};

export default HomePage;
