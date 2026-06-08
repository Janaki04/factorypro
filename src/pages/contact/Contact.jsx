import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"


function Contact() {
  return (
    <>
   <PageBanner 
        titleLight="Contact"
        titleBold="us"
        activePage="Contact"
        bgImage={bg}
      />
    <Footer/>
     </>
  )
}

export default Contact