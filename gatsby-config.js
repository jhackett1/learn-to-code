module.exports = {
  siteMetadata: {
    title: 'DDaT Codelabs',
  },
  plugins: [
    // Ingest markdown files from three locations
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./lessons`,
        name: "lessons",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./modules`,
        name: "modules",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
}
