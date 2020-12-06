const {slugify} = require(`./src/utility/functions/functions.js`)
const path = require(`path`)


exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle
    })
  }
}

exports.onCreatePages = ({graphql, actions}) => {
  const {createPage} = actions
  const singlePostTemplate = path.resolve(`src/templates/single-post.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slugs
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }
    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({node}) =>{
      createPage({
        path: node.fields.slug,
        component: singlePostTemplate,
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}