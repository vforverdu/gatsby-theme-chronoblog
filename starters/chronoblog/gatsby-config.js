module.exports = {
  siteMetadata: {
    title: 'Chronoblog Starter',
    description: 'Starter for Gatsby Theme Chronoblog',
    siteUrl: 'http://localhost:8000', // example - http://example.com
    pathPrefix: '/',
    language: 'en',
    author: 'Site Author', // for example - 'Ivan Ganev'
    twitter: '' // for twitter cards meta data, example - '@ganevru'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        // ui text fot translate
        uiText: {
          feedShowMoreButton: '⬇️ show more ⬇️',
          feedSearchPlaceholder: 'search',
          allTagsButton: 'all tags'
        },
        feedItemsLimit: 50
      }
    }
  ]
};
