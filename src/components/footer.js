import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
    `)


    return (
        <footer>
            <p>{data.site.siteMetadata.title} created by {data.site.siteMetadata.author}, © 2022</p>
        </footer>
    )
}

export default Footer