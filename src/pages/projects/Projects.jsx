import React from 'react'
import Header from '../../components/Header'
import ProjectGallery from './ProjectGallery'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"


function Projects() {
  return (
    <>
   <PageBanner 
        titleLight="Our"
        titleBold="Project"
        activePage="Project"
        bgImage={bg}
      />
    <ProjectGallery/>
    <Footer/>
     </>
  )
}

export default Projects