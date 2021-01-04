module.exports = {
  siteMetadata: {
    title: `📜 Karson's Blog`,
    author: {
      name: `Karson`,
      summary: `a front end dev trying to make the web a little better place and earn a living with it.`,
    },
    description: `Front End Dev, Sport Enthusiast & Occasional Graphic Designer making the web a little better place and trying to earn a living. 🤟🎊🎉`,
    siteUrl: `https://blog.krsn.xyz`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
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
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karson's Blog`,
        short_name: `Karson's Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#005b99`,
        display: `fullscreen`,
        icon: `static/favicons/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
