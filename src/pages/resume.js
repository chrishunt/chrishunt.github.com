import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resume" />
      <h1 className='pt-4 font-bold text-4xl'>
        <a href='/'>Chris Hunt</a>
      </h1>

      <p>
        Southern California ·
        <a className='text-blue-700' href='mailto:chris@chrshnt.com'> chris@chrshnt.com </a>·
      </p>
      <p>
        GitHub: <a className='text-blue-700' href='https://github.com/chrishunt'>@chrishunt </a>·
        Instagram: <a className='text-blue-700' href='https://www.instagram.com/huntca/'>@huntca </a>·
        Web: <a className='text-blue-700' href='https://www.chrishunt.co/'>chrishunt.co </a>
      </p>

      <h1 className='pt-4 text-3xl font-bold'>Experience</h1>

      <p className='pt-4'>
        <span className='font-bold'>Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Anrok </span> ·
        March 2021 - Present
      </p>
      <p className='pb-4'>
        <span className='italic'>TypeScript, Node, Google Cloud Platform</span> -
        Billing system integrations, solutions engineering
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Principal Backend Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> FortressIQ </span> ·
        Oct 2020 - April 2021
      </p>
      <p className='pb-4'>
        <span className='italic'>Ruby, Rails, GoLang</span> -
        AI process discovery, computer vision
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Backend / API Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Stripe </span> ·
        Jan 2020 - Oct 2020
      </p>
      <p className='pb-4'>
        <span className='italic'>Ruby, Sinatra, Sorbet</span> -
        Stripe Connect Accounts API
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Senior Blockchain Developer</span> ·
        <span className='bg-yellow-200 font-bold'> OmiseGO </span> ·
        Jun 2019 - Dec 2019
      </p>
      <p className='pb-4'>
        <span className='italic'>Elixir, Plasma, JavaScript</span> -
        Ethereum Plasma, Specs, Docker
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Senior Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Coinbase </span> ·
        May 2018 - June 2019
      </p>
      <p className='pb-4'>
        <span className='italic'>Ruby, Rails, JavaScript</span> -
        Internal Tools, Notifications, Transaction Monitoring
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> GitHub </span> ·
        Jun 2013 - May 2018
      </p>
      <p className='pb-4'>
        <span className='italic'>Ruby, Rails, JavaScript</span> -
        GitHub Marketplace, GitHub Billing, GitHub Enterprise
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Camera Bits, Inc. </span> ·
        Feb 2013 - Jun 2013
      </p>
      <p className='pb-4'>
        <span className='italic'>Ruby, Rails, JavaScript</span> -
        Spree open source commerce, Photo Mechanic
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Square Inc. </span> ·
        Feb 2012 - Feb 2013
      </p>
      <p className='pb-4'>
        <span className='italic'>Ruby, Rails, JavaScript</span> -
        Payments, Risk analysis/automation, Internal tools
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Climate Corporation </span> ·
        Sep 2011 - Feb 2012
      </p>
      <p className='pb-4'>
        <span className='italic'>Java, Ruby, Rails, JavaScript </span> -
        GeoCoding web service
      </p>

      <p className='pt-4'>
        <span className='font-bold'>Software Engineer</span> ·
        <span className='bg-yellow-200 font-bold'> Progeny Systems </span> ·
        Jul 2009 - Sep 2011
      </p>
      <p className='pb-4'>
        <span className='italic'>Java, Ruby, Rails, JavaScript</span> -
        DoD software contracts, US Navy
      </p>

      <h1 className='pt-4 text-3xl font-bold'>On-the-side</h1>

      <ul className='list-disc pl-8 py-4'>
        <li>
          <a className='text-blue-700' href='https://www.wlfxhere.com'>wlfxhere.com</a> -
          Explore, connect, discover, <span className='font-bold'>FURTHER TOGETHER.</span>
          <span className='italic'> (Ruby/Rails/Mapbox)</span>
        </li>
        <li>
          <a className='text-blue-700' href='https://www.mytracks.co'>mytracks.co</a> -
          These are <span className='font-bold'>your tracks</span>
          <span className='italic'> (Ruby/Rails/Mapbox)</span>
        </li>
        <li>
          <a className='text-blue-700' href='https://www.briefs.fm/'>briefs.fm</a> -
          <span className='font-bold'> Start a podcast</span> before you close
          this tab <span className='italic'>(Ruby/Rails/Audio)</span>
        </li>
        <li>
          <a className='text-blue-700' href='https://www.zwiftsegments.com/'>zwiftsegments.com</a> -
          <span className='font-bold'> Track your progress</span> on Zwift
          <span className='italic'> (Ruby/Rails/Strava)</span>
        </li>
        <li>
          <a className='text-blue-700' href='https://www.trailmix.life/'>trailmix.life</a> -
          A private <span className='font-bold'>place to write</span>
          <span className='italic'> (Ruby/Rails)</span>
        </li>
      </ul>

      <h1 className='pt-4 text-3xl font-bold'>Talks</h1>

      <ul className='list-disc pl-8 py-4'>
        <li>
          <a className='text-blue-700' href='/solving-the-rubiks-cube-blindfolded'>
            Solving the Rubik's Cube Blindfolded
          </a> - RubyConf, Argentina
        </li>
        <li>
          <a className='text-blue-700' href='/secrets-of-a-world-memory-champion'>
            Secrets of a World Memory Champion
          </a> - GoRuCo, New York
        </li>
        <li>
          <a className='text-blue-700' href='/solving-the-rubiks-cube-in-20-seconds'>
            Solving The Rubik's Cube in 20 Seconds
          </a> - GoGaRuCo, San Francisco
        </li>
      </ul>

      <h1 className='pt-4 text-3xl font-bold'>Education</h1>

      <p className='pt-4 pb-8'>
        <span className='font-bold'>Bachelors Computer Science</span> ·
        Pacific Lutheran University

        <p>
          2003 - 2008
          <span className='italic'> Capstone: Rubik’s Cube solving robot, Java</span>
        </p>
      </p>
    </Layout>
  )
}

export default ResumePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
