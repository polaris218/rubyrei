/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    // plugins: [`gatsby-plugin-react-helmet`],
  // siteMetadata: {
  //   title: `FUN with Ruby Rei`,
  //   siteUrl: `https://fun.rubyrei.com`,
  //   description: `A2 Flyers Digital English Course for Schools`,
  // },
  plugins: [`gatsby-plugin-styled-components`, {
    resolve: `gatsby-plugin-intercom`,
    options: {
      appId: 't9zpywzk',
    },
  }],
}