import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Index"/>
        <h2>Hello.</h2>
        <h4>I´m Carlos, living in Barcelona.</h4>
        <Link to="/contact">
         Contact Me
        </Link>
    </Layout>
  )
}

export default IndexPage