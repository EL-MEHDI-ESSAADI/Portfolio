const profile = require("./src/data/profile.json");
module.exports = {
  siteMetadata: {
    title: profile.name,
    siteUrl: profile.siteUrl,
    description: profile.summary,
  },
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "images", path: `${__dirname}/static/images/` },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: { defaults: { placeholder: "blurred", quality: 88 } },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "El Mehdi Essaadi | Frontend Engineer",
        short_name: "Mehdi",
        start_url: "/",
        background_color: "#f7f9fc",
        theme_color: "#25364d",
        display: "standalone",
        icon: "src/assets/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: { trackingIds: ["G-QTHZYEYQSS"], pluginConfig: { head: true } },
    },
  ],
};
