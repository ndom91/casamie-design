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
        icon: 'src/images/icon.jpg',
      },
    },
    'gatsby-plugin-sass',
  ],
}
