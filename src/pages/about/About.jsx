import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"


function About() {
  return (
    <>
   <PageBanner 
        titleLight="About"
        titleBold="Us"
        activePage="About Us"
        bgImage={bg}
      />
    <Footer/>
     </>
  )
}

export default About