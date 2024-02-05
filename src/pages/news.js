import React from 'react'
import { Link, graphql } from 'gatsby'

const NewsPage = ({ data }) => {
  return (
    <div>
      <h1>最新のお知らせ</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.path}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            path
          }
        }
      }
    }
  }
`

export default NewsPage
