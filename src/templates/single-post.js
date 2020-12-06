import React from 'react'
import {SideBar} from '../components/global/global'
import {graphql, Link} from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import {slugify} from '../utility/functions/functions'


const SinglePost = ({data}) => {
  const post = data.markdownRemark.frontmatter

  return (
    <div>
      <SEO title={post.title}/>
      <h1>{post.title}</h1>
      <div>
        <div className="card">
          <div className="card__body">
            <div className="card__subtitle">{post.date} by {post.author}</div>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
            <ul className="post__tags">
              {
                post.tags.map(tag => {
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <div className="pill">{tag}</div>
                    </Link>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
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
  }
`

export default SinglePost
