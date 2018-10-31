import React from 'react'
import { graphql,  } from 'gatsby'
import Helmet from 'react-helmet';
import Layout from '../layouts'
import styled from 'react-emotion'
import PostList from '../components/PostList'
import Header from '../components/Header'

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem 3rem 1rem 3rem;
`

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
    <Helmet title={`Blog Page`} />
      <Header title= 'Blog Page'>
        Gatsby Tutorial Starter
      </Header>
      <PostsWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
        ))}
      </PostsWrapper>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
