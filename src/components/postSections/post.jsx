import React from 'react'
import './post.css'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {slugify} from '../../utility/functions/functions.js'


const Post = ({title, date, author, path, body, fluid, tags}) => {
  return (
    <div className="post__card">
      <Link to={path}>
        <Img className="post__image" fluid={fluid} alt={`building`}/>
      </Link>
      <h1><Link to={path}>{title}</Link></h1>
      <h6>{date}</h6>
      <h6>author {author}</h6>
      <p>{body}</p>
      <div className="tag__container">
        {
          tags.map((tag, index) => {
            return (
              <div className="pills">
                <li key={index}><Link to={`/tag/${slugify(tag)}`}>{tag}</Link></li>
              </div>
            )
          })
        }
      </div>
      <button><Link to={path}>read more</Link></button>
    </div>
  )
}

export default Post
