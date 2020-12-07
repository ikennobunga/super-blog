import React from "react"
import SEO from "../components/seo"
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>Something went wrong!</h1>
    <Link to={`/`}><button>Go Back</button></Link>
  </div>
)

export default NotFoundPage