const { resolve } = require('path')

module.exports = {
  siteMetadata: {
    title: `custom nehalem`,
    topics: [`redditors`, `bloggers`, `geeks`, `nerds`, `people`, `everyone`],
    author: {
      name: `gex`,
      description: `I'm <strong>gex</strong>, an average redditor`,
      social: {
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        youtube: '',
        github: 'https://github.com/gex',
        twitch: ''
      }
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: resolve(__dirname, 'content')
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Tags'
      }
    },
    {
      resolve: '@nehalist/gatsby-theme-nehalem',
      options: {
        manifest: {
          name: 'nehalem - A Gatsby theme',
          short_name: 'nehalem',
          start_url: '/',
          background_color: '#a4cbb8',
          theme_color: '#a4cbb8',
          display: 'minimal-ui',
          icon: resolve(__dirname, 'content/assets/nehalist-gatsby.png')
        },
        loadDefaultPages: true,
        postsPerPage: 5
      }
    }
  ]
}
