import React from 'react'
import './404.css'
import {Link} from 'gatsby'


const Page404 = () => {
  return (
    <div className="page404__container">
      <h1>Something went wrong!</h1>
      <Link to={`/`}><button>Go Back</button></Link>
    </div>
  )
}

export {Page404}
