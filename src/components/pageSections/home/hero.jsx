import React from 'react'
import './hero.css'
import { graphql, useStaticQuery } from 'gatsby'
import Post from '../../../components/postSections/post'


const Hero = () => {
  const data = useStaticQuery(indexQuery)
  return (
    <div className="hero__container">
      <h1>am a hero</h1>
      {
        data.allMarkdownRemark.edges.map(({node}) => {
          return (
          <Post 
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            author={node.frontmatter.author}
            body={node.excerpt}
            path={node.frontmatter.path}
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
          )
        })
      }
    </div>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "DD MMM YYYY")
            path
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export {Hero}