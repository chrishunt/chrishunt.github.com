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
    <div className="my-4">
      {author?.name && (
        <p>
          {avatar && (
            <Image
              fixed={avatar}
              alt={author?.name || ``}
              className='inline-block align-middle'
              style={{
                width: '50px',
                height: '50px',
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          )}

          <span className='pl-2'>
            Written by <a href={`https://twitter.com/${social?.twitter || ``}`}>
              <strong>{author.name}</strong>
            </a> {author?.summary || null}
            {` `}
          </span>
        </p>
      )}
    </div>
  )
}

export default Bio
