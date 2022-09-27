import * as React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h2>Contact</h2>
            <p>Contact details here</p>
            <p>And you could reach me on <a href="https://soundcloud.com/carlos-cuadrado-00" rel="noopener noreferer" target="_blank">SoundCloud</a></p>
        </Layout>
    )
}


export default ContactPage