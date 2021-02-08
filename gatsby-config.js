module.exports = {
  siteMetadata: {
    title: 'CasaMie',
    author: 'Julide Demirtas',
    description: 'CasaMie Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jdemirtas',
        short_name: 'jdemirtas',
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
