import React from 'react'
import SEO from "../components/seo"
import {AboutHero} from '../components/pageSections/pageSection'


const About = () => {
  return (
    <>
      <SEO title={`About`}/>
      <AboutHero/>
    </>
  )
}

export default About
