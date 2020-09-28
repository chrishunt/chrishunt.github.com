import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="pt-4"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1
            itemProp="headline"
            className='text-4xl font-bold'
          >
            {post.frontmatter.title}
          </h1>
          <p className='opacity-50 pb-4'>
            {post.frontmatter.date} by
            <a className='text-blue-700' href='/'> Chris Hunt</a>
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav className="py-4 opacity-50">
        <p>
          <Link className="" to="/">← all posts</Link>
        </p>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        description
      }
    }
  }
`
