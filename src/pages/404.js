import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 className='py-4 font-bold text-4xl'>404: Not Found :(</h1>
      <p className='py-4'>
        Sorry, there's nothing here. Maybe you're looking for
        <a className='text-blue-700' href='/'> something else</a>?
      </p>

      <nav className="py-4 opacity-50">
        <p>
          <Link className="" to="/">← all posts</Link>
        </p>
      </nav>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
