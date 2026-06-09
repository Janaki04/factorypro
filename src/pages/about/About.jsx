import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"
import AboutUsSection from '../home/AboutSection';
import WhatWeDo from '../home/WhatWeDo';
import IndustrialProcessSection from '../home/IndustrialProcessSection';
import IndustrialClientTestimonials from '../home/IndustrialClientTestimonials';
import CoreStrengths from './CoreStrengths';
import TeamSection from './TeamSection';
import FAQSection from './FAQSection';
import CorporateShowcase from './CorporateShowcase';


function About() {
  return (
    <>
   <PageBanner 
        titleLight="About"
        titleBold="Us"
        activePage="About Us"
        bgImage={bg}
      />
      <AboutUsSection/>
      <CorporateShowcase/>
      <WhatWeDo/>
      <CoreStrengths/>
      <IndustrialProcessSection/>
      <TeamSection/>
      <IndustrialClientTestimonials/>
      <FAQSection/>
    <Footer/>
     </>
  )
}

export default About