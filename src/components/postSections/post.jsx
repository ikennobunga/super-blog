import React from 'react'
import {Link} from 'gatsby'


const Post = ({title, date, author, path, body}) => {
  return (
    <div>
      <h1><Link to={path}>{title}</Link></h1>
      <h6>{date}</h6>{''}
      <h6>{author}</h6>
      <p>{body}</p>
      <button><Link to={path}>read more</Link></button>
    </div>
  )
}

export default Post
