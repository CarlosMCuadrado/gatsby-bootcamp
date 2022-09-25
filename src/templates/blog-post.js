import * as React from 'react'
import { graphql } from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'

//
//
// markdown way
//
//
// export const query = graphql`
// query (
//     $slug: String!
//   ) {
//     markdownRemark (
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ){
//       frontmatter {
//         title
//         date
//       }
//       timeToRead
//       html
//     }
//   }
// `

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      raw
    }
  }
}
`



const Blog = (props) => {

    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {renderRichText(props.data.contentfulBlogPost.body)}
        </Layout>
    )
    }

export default Blog