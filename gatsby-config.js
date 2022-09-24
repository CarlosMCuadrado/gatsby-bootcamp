
module.exports = {
  siteMetadata: {
    title: 'Full Gatsby Bootcamp',
    author: 'Carlos Cuadrado',
    description: 'Silence is gold'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
