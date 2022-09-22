import { graphql, useStaticQuery, Link } from 'gatsby'
import * as React from 'react'

import * as footerStyles from './footer.module.scss'

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
        <footer className={footerStyles.footer}>
            <p>{data.site.siteMetadata.title} created by <Link className={footerStyles.navItem} to='/'>{data.site.siteMetadata.author}</Link>, © 2022</p>
        </footer>
    )
}

export default Footer