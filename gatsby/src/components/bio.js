/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="my-4 opacity-50">
      <p>
        <a href='mailto:c@chrishunt.co'> email </a> ·
        <a href='https://www.linkedin.com/in/huntchris/'> linkedin </a> ·
        <a href='https://twitter.com/chrishunt'> twitter </a> ·
        <a href='https://www.instagram.com/huntca/'> instagram </a> ·
        <a href='https://www.strava.com/athletes/312201'> strava </a>
      </p>
    </div>
  )
}

export default Bio
