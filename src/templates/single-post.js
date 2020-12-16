import React from 'react'
import {graphql, Link} from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import {slugify} from '../utility/functions/functions'
import authors from '../data/authors'
import Layout from '../components/layout'


const SinglePost = ({data}) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(author => author.name === post.author)
  const image = data.file.childImageSharp.fluid
  return (
    <Layout postAuthor={author} authorImage={image}>
      <SEO title={post.title}/>
      <h1>{post.title}</h1>
      <div>
        <div className="card">
          <Img fluid={post.image.childImageSharp.fluid}/>
          <div className="card__body">
            <div className="card__subtitle">{post.date} by {post.author}</div>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
            <ul className="post__tags">
              {
                post.tags.map(tag => {
                  return (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <div className="pill">{tag}</div>
                    </Link>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM DD YYYY")
        tags
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: {eq: $imageUrl}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SinglePost