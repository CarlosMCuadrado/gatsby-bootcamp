import * as React from 'react'
import { graphql } from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import Head from '../components/head'

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
      references {
        ...on ContentfulAsset {
          contentful_id
          __typename
          file {
            url
            fileName
          }
        }
      }
    }
  }
}
`



const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
            <img
              src={node.data.target.file.url}
              alt={node.data.target.file.fileName}
            />
        )
      },
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title}/>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {data.contentfulBlogPost.body &&
        renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog
