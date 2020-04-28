import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello World</h1>
      <h2>I'm gerald, a full-stack developer</h2>

      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
