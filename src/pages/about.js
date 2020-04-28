import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        quibusdam nostrum maiores placeat eum. Ducimus tempore vel quasi
        voluptatum. Aliquid iste blanditiis mollitia sit illum suscipit illo
        voluptate sequi fugit?
      </p>
      <p>
        contact me: <Link to="/contact">link</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
