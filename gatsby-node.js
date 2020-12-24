const {slugify} = require(`./src/utility/functions/functions.js`)
const path = require(`path`)
const authors = require(`./src/data/authors`)


exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === 'Mdx') {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle
    })
  }
}

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const singlePostTemplate = path.resolve(`src/templates/single-post.js`)

  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }
    const posts = res.data.allMdx.edges

    posts.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: singlePostTemplate,
        context: {
          slug: node.fields.slug,
          imageUrl: authors.find(author => author.name === node.frontmatter.author).imageUrl
        }
      })
    })

    //TODO here we are getting our tags page and we need to install a load dash for some functionalities
  })
}