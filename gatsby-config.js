module.exports = {
  siteMetadata: {
    title: 'Learn to code',
    credit: 'Built and maintained by DDaT Fast Streamers'
  },
  plugins: [
  {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: "UA-91311733-7",
         head: false,
         anonymize: true,
         respectDNT: true,
       },
     },
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
            },
          },
          `gatsby-remark-copy-linked-files`,
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
