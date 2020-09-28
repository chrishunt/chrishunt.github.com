module.exports = {
  siteMetadata: {
    title: `Chris Hunt`,
    author: {
      name: `Chris Hunt`,
      summary: `in Denver, Colorado.`,
    },
    description: `Chris Hunt`,
    siteUrl: `https://www.chrishunt.co/`,
    social: {
      twitter: `chrishunt`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Source Code Pro']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                heading: "font-bold py-4",
                "heading[depth=1]": "text-5xl",
                "heading[depth=2]": "text-4xl",
                "heading[depth=3]": "text-3xl",
                "heading[depth=4]": "text-2xl",
                "heading[depth=5]": "text-xl",
                paragraph: "py-4",
                list: "list-disc pl-8 py-4",
                link: "text-blue-700",
                blockquote: "p-4 my-4 bg-orange-200 border-l-4 border-orange-500 italic",
              },
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-25283496-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chris Hunt`,
        short_name: `chrishunt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
