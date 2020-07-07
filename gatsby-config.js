const { resolve } = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: resolve(__dirname, 'content')
      }
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Tags`
      }
    },
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: resolve(__dirname, 'content/assets/nehalist-gatsby.png')
        },
        loadDefaultPages: true,
        postsPerPage: 5
      }
    }
  ]
}
