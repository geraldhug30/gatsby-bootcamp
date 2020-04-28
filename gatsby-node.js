const path = require("path")

// Uses to generate slug only
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.internal.type !== "SitePage"
//   ) {
//     // split or cut the path to conver it to file name only
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // path of the page
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // get the slug patch in graphql
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // create new page
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
