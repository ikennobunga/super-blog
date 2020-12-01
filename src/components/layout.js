import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {NavBar  } from '../components/global/global'


const Layout = ({ children }) => {
  const data = useStaticQuery(query)
  return (
    <>
      <NavBar siteMetaData={data.site.siteMetadata.title || `Title`} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
