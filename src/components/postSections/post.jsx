import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import './post.css'


const Post = ({title, date, author, path, body, fluid}) => {
  return (
    <div>
      <Img className="post__image" fluid={fluid} alt={`building`}/>
      <h1><Link to={path}>{title}</Link></h1>
      <h6>{date}</h6>
      <h6>author {author}</h6>
      <p>{body}</p>
      <button><Link to={path}>read more</Link></button>
    </div>
  )
}

export default Post
