/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
  return (
    <div className="my-4 opacity-50">
      <p>
        <span className='font-bold'>&#8595; Chris Hunt</span> <br/>
        <a className='text-blue-700' href='mailto:c@chrishunt.co'> Email </a> ·
        <a className='text-blue-700' href='/resume'> Resume </a> ·
        <a className='text-blue-700' href='https://github.com/chrishunt'> Git </a> ·
        <a className='text-blue-700' href='https://twitter.com/chrishunt'> Twitter </a> ·
        <a className='text-blue-700' href='https://www.instagram.com/huntca/'> Insta</a>
      </p>
    </div>
  )
}

export default Bio
