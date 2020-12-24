import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const TagsPage = ({pageContext}) => {
  return (
    <Layout pageTitle={`App tags`}>
      <SEO title={`All tags`} keywords={[`tags`, `topics`]}/>
    </Layout>
  )
}

export default TagsPage
