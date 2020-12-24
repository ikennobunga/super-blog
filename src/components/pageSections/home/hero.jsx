import React from 'react'
import './hero.css'
import { graphql, useStaticQuery } from 'gatsby'
import Post from '../../../components/postSections/post'
import Layout from '../../../components/layout'


const Hero = () => {
  const data = useStaticQuery(indexQuery)
  return (
    <Layout>
      <div className="hero__container">
        <h1>am a hero</h1>
        {
          data.allMdx.edges.map(({node}) => {
            return (
            <Post 
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              author={node.frontmatter.author}
              body={node.excerpt}
              slug={node.fields.slug}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
            )
          })
        }
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          body
          id
          frontmatter {
            author
            date(formatString: "DD MMM YYYY")
            title
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export {Hero}