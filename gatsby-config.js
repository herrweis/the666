module.exports = {
  siteMetadata: {
    title: `the666 — raise your sowrd and be prepared`,
    description: `Evil is rising from the dead`,
    author: `@andi_weis`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00ffff`,
        theme_color: `#00ffff`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
  ],
}
