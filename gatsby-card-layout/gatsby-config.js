module.exports = {
  siteMetadata: {
    title: 'Blake Immigration Law',
    author: 'Jillian Blake',
    description:
      'Blake Immigration Law -- Specializing in Removal Defense, Asylum, and Family-based Immigration',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'blake-immigration-law',
        short_name: 'blakelaw',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/FaviconLogo.png', // This path is relative to the root of the site.
        headers: {
          '/social': ['X-Frame-Options:ALLOW'],
        },
        mergeSecurityHeaders: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
