import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h2>About Me</h2>
            <p>I´m a visual artist and dj living with the incredible Amai Rodríguez in Barcelona</p>
            <p>I work in the intersection of music, shape and interaction.</p>
            <Link to="/contact">Contact
            </Link>
        </Layout>
    )
}


export default AboutPage