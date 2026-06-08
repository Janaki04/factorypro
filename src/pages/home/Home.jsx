import React from 'react'
import Hero from './Hero'
import AboutUsSection from './AboutSection'
import IndustrialSections from './IndustrialSections'
import WhatWeDo from './WhatWeDo'
import IndustrialProjectsSection from './IndustrialProjectsSection'
import IndustrialProcessSection from './IndustrialProcessSection'
import IndustrialPricingSection from './IndustrialPricingSection'
import IndustrialClientTestimonials from './IndustrialClientTestimonials'
import IndustrialBlogSection from './IndustrialBlogSection'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <AboutUsSection/>
        <IndustrialSections/>
        <WhatWeDo/>
        <IndustrialProjectsSection/>
        <IndustrialProcessSection/>
        <IndustrialPricingSection/>
        <IndustrialClientTestimonials/>
        <IndustrialBlogSection/>
        <Footer/>
    </div>
  )
}

export default Home