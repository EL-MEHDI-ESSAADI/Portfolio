module.exports = {
   siteMetadata: {
      title: "Mehdi Essaadi",
      siteUrl: `https://mehdiessaadi.live`,
      siteType: "Portfolio",
      bigDescription:
         "Hello! My name is Mehdi Essaadi I’m a Frontend Developer, I contribute to the web by building fast, accessible, and pretty web applications",
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
   ],
};
