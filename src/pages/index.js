import React from "react"
import SEO from "../components/seo"
import {Hero} from '../components/pageSections/pageSection'

const IndexPage = () => {
  return (
    <>
      <SEO title={`Home`}/>
      <Hero/>
    </>
  )
}
export default IndexPage
