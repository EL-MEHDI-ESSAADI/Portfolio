module.exports = {
   siteMetadata: {
      title: "El Mehdi Essaadi",
      siteUrl: `https://mehdiessaadi.com`,
      siteType: "Portfolio",
      bigDescription:
         "Hello! My name is El Mehdi Essaadi I’m a Frontend Developer, I contribute to the web by building fast, accessible, and pretty web applications",
      smallDescription: "Hello! My name is Mehdi, I'm a Frontend Developer",
      twitterUserName: "@Von__Mehdi",
   },
   plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-sass",
      "gatsby-plugin-resolve-src",
      "gatsby-plugin-netlify",
      "gatsby-plugin-react-helmet",
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `assets`,
            path: `${__dirname}/src/assets/`,
         },
      },
      "gatsby-plugin-image",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-plugin-sharp",
         options: {
            defaults: {
               placeholder: "blurred",
               backgroundColor: `transparent`,
            },
         },
      },
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /assets/,
            },
         },
      },
      {
         resolve: "gatsby-plugin-manifest",
         options: {
            icon: "src/assets/images/logo.png",
         },
      },
      {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
               "G-QTHZYEYQSS", // Google Analytics 
            ],
            // This object is used for configuration specific to this plugin
            pluginConfig: {
               // Puts tracking script in the head instead of the body
               head: true,
            },
         },
      },
   ],
};
