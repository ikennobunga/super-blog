import React from 'react'
import './sideBar.css'
import Img from 'gatsby-image'
import {graphql, useStaticQuery, Link} from 'gatsby'


const SideBar = ({author, authorFluid}) => {
  const data = useStaticQuery(sideBarQuery)
  
  return (
    <div className="sidebar">
      {
        author && (
          <div className="card">
            <Img fluid={authorFluid}/>
            <div className="card__body">
              <div className="card__title">{author.name}</div>
              <div className="card__text">{author.bio}</div>
              <div className="social__links">
                <ul>
                  <li><a href={author.facebook}></a></li>
                  <li><a href={author.twitter}></a></li>
                  <li><a href={author.instagram}></a></li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
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
            <div key={node.id} className="card__post">
              <div className="card__post__image">
                <li><Link to={node.fields.slug}>
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                </Link></li>
              </div>
              <div className="card__title">
                <Link to={node.fields.slug}>
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
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export {SideBar}
