import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from "../../assets/pricing.jpg";
import PageBanner from "../../components/PageBanner"
import BlogGrid from './BlogGrid';


function Blog() {
  return (
    <>
   <PageBanner 
        titleLight="Lastest"
        titleBold="Post"
        activePage="Blog"
        bgImage={bg}
      />
      <BlogGrid/>
    <Footer/>
     </>
  )
}

export default Blog