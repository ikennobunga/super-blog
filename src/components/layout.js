import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {NavBar, Footer, SideBar} from '../components/global/global'


const Layout = ({ children, postAuthor, authorImage }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <div className="layout__container">
        <div className="layout__flex">
          <NavBar siteMetaData={data.site.siteMetadata.title || `Title`} />
          <main>{children}</main>
        </div>
        <div className="sidebar__container">
          <SideBar author={postAuthor} authorFluid={authorImage}/>
          {/* <SideBar/> */}
        </div>
      </div>
      <Footer/>
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
