import React from 'react'
import {Link} from 'gatsby'


const Post = ({title, date, author, path, body}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h6>{date}</h6>{''}
      <h6>{author}</h6>
      <p>{body}</p>
      <Link to={path}>read more</Link>
    </div>
  )
}

export default Post
