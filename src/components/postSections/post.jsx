import React from 'react'
import './post.css'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {slugify} from '../../utility/functions/functions.js'


const Post = ({title, date, author, slug, body, fluid, tags}) => {
  return (
    <div className="post__card">
      <Link to={slug}>
        <Img className="post__image" fluid={fluid} alt={`building`}/>
      </Link>
      <h1><Link to={slug}>{title}</Link></h1>
      <h6>{date}</h6>
      <h6>author {author}</h6>
      <p>{body}</p>
      <div className="tag__container">
        {
          tags.map(tag => {
            return (
              <div key={tag} className="pills">
                <li><Link to={`/tag/${slugify(tag)}`}>{tag}</Link></li>
              </div>
            )
          })
        }
      </div>
      <button><Link to={slug}>read more</Link></button>
    </div>
  )
}

export default Post
