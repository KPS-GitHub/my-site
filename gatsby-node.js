const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/page.js')

  const result = await graphql(
    `
      {
        allContentfulPage {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful pages`,
      result.errors
    )
    return
  }

  const pages = result.data.allContentfulPage.nodes

  // Create blog pages pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (pages.length > 0) {
    pages.forEach((post, index) => {
      const previousPageslug = index === 0 ? null : pages[index - 1].slug
      const nextPageslug =
        index === pages.length - 1 ? null : pages[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPageslug,
          nextPageslug,
        },
      })
    })
  }
}
