// module.exports = {
//   // Meta Data
//   siteTitle: 'Gatsby Tutorial Starter',
//   siteTitleAlt: 'GatsbyTutorial',
//   siteShortName: 'GatsbyStarter',
//   siteLogo: '/social/avatar.png',
//   siteBanner: '/social/banner.jpg',
//   siteUrl: 'https://justinformentin.com',
//   pathPrefix: '/',
//   siteDescription:
//     'A Gatsby V2 Starter tTemplate Built with a Step By Step Guide',
//   // IDs
//   googleAnalyticsID: '',
//   twitter: '@justinformentin',
//   // Manifest
//   themeColor: '#3498DB',
//   backgroundColor: '#2e3246',
// };

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Tutorial Starter', // Navigation and Site Title
  titleAlt: 'Gatsby Tutorial Starter', // Title for JSONLD
  description: 'A Gatsby V2 Starter Template Built with a Step By Step Guide',
  url: 'https://gatsby-tutorial-starter.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://gatsby-tutorial-starter.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'src/assets/logo.png', // Used for SEO
  banner: 'src/assets/banner.png',

  // JSONLD / Manifest
  favicon: 'src/assets/favicon.png', // Used for manifest favicon generation
  shortName: 'GatsbyTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Justin', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',

  twitter: '@justinformentin', // Twitter Username
};
