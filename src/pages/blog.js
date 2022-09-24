import { graphql, Link } from 'gatsby'
import * as React from 'react'

import Layout from '../components/layout'

//
// Andrew resolved in another style: useStaticQuery inside the BlogPage component
//

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {

    console.log(data)

    return (
        <Layout>
            <h2>Blog</h2>
            <ol>
            {
                data.allMarkdownRemark.edges.map(
                    ({node})=>
                    <li>
                        <h3>{node.frontmatter.title}</h3>
                        <p>{node.frontmatter.date}</p>
                        <Link to = {node.fields.slug}>{node.fields.slug}</Link>
                    </li>
                )
            }
            </ol>
        </Layout>
    )
}



export default BlogPage