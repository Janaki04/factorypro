import React from 'react';
import Header from '../../components/Header';
import bg from "../../assets/pricing.jpg";
import IndustrialPricingSection from '../home/IndustrialPricingSection';
import WhatWeDo from '../home/WhatWeDo';
import IndustrialClientTestimonials from '../home/IndustrialClientTestimonials';
import Footer from '../../components/Footer';
import PageBanner from "../../components/PageBanner"


const Pricing = () => {
  return (
    <>
   <PageBanner 
        titleLight="Pricing"
        titleBold="plan"
        activePage="Pricing"
        bgImage={bg}
      />
    <IndustrialPricingSection/>
    <WhatWeDo/>
    <IndustrialClientTestimonials/>
    <Footer/>                         
    </>
  );
};

export default Pricing;