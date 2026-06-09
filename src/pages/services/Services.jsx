import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"
import ServicesDetailView from './ServicesDetailView';


function Services() {
  return (
    <>
   <PageBanner 
        titleLight="Custom Manufacturing "
        titleBold="Solution"
        activePage="Services"
        bgImage={bg}
      />
      <ServicesDetailView/>
    <Footer/>
     </>
  )
}

export default Services