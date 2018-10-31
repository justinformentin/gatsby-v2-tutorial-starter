
const path = require('path')

const createTagPages = (createPage, posts) => {
  const tagPage = path.resolve('src/pages/tags.jsx')
  const tagPosts = path.resolve('src/templates/tag.jsx')

  const postsByTag = {}

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: tagPage,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: tagPosts,
      context: {
        posts,
        tagName,
      }
    })
  })
}

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark (
              sort: {order: ASC, fields: [frontmatter___date]}
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        createTagPages(createPage, posts)

        posts.forEach(({node}, index) => {
          const path = node.frontmatter.path
          const prev = index === 0 ? null : posts[index - 1].node
          const next = index === (posts.length - 1) ? null : posts[index + 1].node
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
              prev,
              next
            }
          })

          resolve()
        })

      })
    )
  })
})






////////////////////////
// const path = require('path')

// const createTagPages = (createPage, posts) => {
//   const tagPage = path.resolve('src/pages/tags.jsx')
//   const tagTemplate = path.resolve('src/templates/tag.jsx')

//   const tagPosts = {}

//   posts.forEach(({node}) => {
//     if (node.frontmatter.tags) {
//       node.frontmatter.tags.forEach(tag => {
//         if (!tagPosts[tag]) {
//           tagPosts[tag] = []
//         }

//         tagPosts[tag].push(node)
//       })
//     }
//   })

//   const tags = Object.keys(tagPosts)

//   createPage({
//     path: '/tags',
//     component: tagPage,
//     context: {
//       tags: tags.sort()
//     }
//   })

//   tags.forEach(tagName => {
//     const posts = tagPosts[tagName]

//     createPage({
//       path: `/tags/${tagName}`,
//       component: tagTemplate,
//       context: {
//         posts,
//         tagName
//       }
//     })
//   })

// }

// exports.createPages = (({graphql, actions}) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const postTemplate = path.resolve('src/templates/post.jsx')

//     resolve(
//       graphql(
//         `
//           query {
//             allMarkdownRemark (
//               sort: {order: ASC, fields: [frontmatter___date]}
//             ) {
//               edges {
//                 node {
//                   frontmatter {
//                     path
//                     title
//                     tags
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         const posts = result.data.allMarkdownRemark.edges

//         createTagPages(createPage, posts)

//         posts.forEach(({node}, index) => {
//           const path = node.frontmatter.path
//           const next = index === (posts.length - 1) ? null : posts[index + 1].node
//           const prev = index === 0 ? null : posts[index - 1].node
//           createPage({
//             path,
//             component: postTemplate,
//             context: {
//               pathSlug: path,
//               prev,
//               next
//             }
//           })

//           resolve()
//         })
//       })
//     )
//   })
// })

//////////////////////////////////////////////////////////////
// const path = require("path")
// const _ = require("lodash")

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const postTemplate = path.resolve("src/templates/post.jsx")
//   const tagTemplate = path.resolve("src/templates/tags.jsx")

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 2000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//               tags
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(({node}, index) => {
//       const path = node.frontmatter.path
//       const next = index === (posts.length - 1) ? null : posts[index + 1].node
//       const prev = index === 0 ? null : posts[index - 1].node
//       createPage({
//         path,
//         component: postTemplate,
//         context: {
//           pathSlug: path,
//           prev,
//           next
//         }
//       })
//     })

//     // Tag pages:
//     let tags = []
//     // Iterate through each post, putting all found tags into `tags`
//     _.each(posts, edge => {
//       if (_.get(edge, "node.frontmatter.tags")) {
//         tags = tags.concat(edge.node.frontmatter.tags)
//       }
//     })
//     // Eliminate duplicate tags
//     tags = _.uniq(tags)

//     // Make tag pages
//     tags.forEach(tag => {
//       createPage({
//         path: `/tags/${_.kebabCase(tag)}/`,
//         component: tagTemplate,
//         context: {
//           tag,
//         },
//       })
//     })
//   })
// }
///////////////////////////////////////////
