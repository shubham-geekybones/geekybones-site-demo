require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "geekybones",
    // siteUrl: "http://localhost:8000/",
    siteUrl: 'https://www.geekybones.com/',
  },
  flags:{
    FUNCTIONS:true
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PQBB59TM",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: "s3KrCaQVQEWds-zop8xn4Q",
        gtmPreview: "env-1",
        dataLayerName: "dataLayer",
        routeChangeEventName: "gatsby-route-change",
        enableWebVitalsTracking: true,
      },
    },
  ],
};
