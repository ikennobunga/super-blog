import React from 'react'
import './sideBar.css'
import Img from 'gatsby-image'
import {graphql, useStaticQuery, Link} from 'gatsby'


const SideBar = () => {
  const data = useStaticQuery(sideBarQuery)

  return (
    <div className="sidebar">
      <div className="card__form">
        <div className="card__title"><h4>News Letter</h4></div>
        <form>
          <input type="email" name="email" placeholder="email address"/>
        </form>
        <button>Subscribe</button>
      </div>

      <div className="card">
        <div className="card__title"><h1>Advertisement</h1></div>
        <img className="card__image" src={require(`../../../images/skyline-new-york-city-7613.jpg`)} alt="skyscraper"/>
      </div>

      {
        data.allMarkdownRemark.edges.map(({node}) => {
          return (
            <div className="card__post">
              <div className="card__post__image">
                <Link key={node.id} to={node.frontmatter.path}>
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                </Link>
              </div>
              <div className="card__title">
                <Link key={node.id} to={node.frontmatter.path}>
                  {node.frontmatter.title}
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const sideBarQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export {SideBar}
