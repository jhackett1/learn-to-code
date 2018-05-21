module.exports = {
  siteMetadata: {
    title: 'DDaT Codelabs',
    credit: 'Built and maintained by DDaT Fast Streamers'
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
  ]
}
