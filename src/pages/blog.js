import { graphql, Link } from 'gatsby'
import * as React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import * as blogStyles from './blog.module.scss'

//
// Andrew resolved in another style: useStaticQuery inside the BlogPage component
//

export const query = graphql`
query {
  allContentfulBlogPost (
    sort: {
      fields: publishedDate,
      order: DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate (
          fromNow: true
        )
      }
    }
  }
}
`

const BlogPage = ({ data }) => {

    console.log(data)

    return (
        <Layout>
          <Head title="Blog"/>
            <h2>Blog</h2>
            <ol className={blogStyles.posts}>
            {
                data.allContentfulBlogPost.edges.map(
                    ({node})=>
                      <li className={blogStyles.post}>
                        <Link to = {node.slug}>
                          <h3>{node.title}</h3>
                          <p>{node.publishedDate}</p>
                        </Link>
                      </li>
                )
            }
            </ol>
        </Layout>
    )
}



export default BlogPage


//
// Changelog:
// 1.1: Markdown code version documented below
// 2.1: Conteful code version up and running
//
//
/*export const query = graphql`
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
            <ol className={blogStyles.posts}>
            {
                data.allMarkdownRemark.edges.map(
                    ({node})=>
                      <li className={blogStyles.post}>
                        <Link to = {node.fields.slug}>
                          <h3>{node.frontmatter.title}</h3>
                          <p>{node.frontmatter.date}</p>
                          </Link>
                          </li>
                    )
                }
                </ol>
            </Layout>
        )
    }
    
    
    
    export default BlogPage
*/