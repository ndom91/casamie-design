module.exports = {
  siteMetadata: {
    title: 'CasaMie',
    author: 'Julide Demirtas',
    description: 'Placeholder for CasaMie Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#A7917A',
        theme_color: '#A7917A',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
