module.exports = {
  siteMetadata: {
    title: "KBpage",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "9bd0ef015ad6adeadfbf16dc413771",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-layout",
    "styled-components",
    `gatsby-plugin-sass`,
    `gatsby-plugin-svgr-svgo`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:300,400,700`],
        display: "swap",
      },
    },
  ],
};
