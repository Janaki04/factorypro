import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"
import ContactView from './ContactView';


function Contact() {
  return (
    <>
   <PageBanner 
        titleLight="Contact"
        titleBold="us"
        activePage="Contact"
        bgImage={bg}
      />
      <ContactView/>
    <Footer/>
     </>
  )
}

export default Contact