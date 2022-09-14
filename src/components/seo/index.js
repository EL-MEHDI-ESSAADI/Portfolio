import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

function Seo() {
   const data = useStaticQuery(graphql`
      {
         secondaryLogo: file(relativePath: { eq: "images/secondaryLogo.png" }) {
            childImageSharp {
               gatsbyImageData
            }
         }
         scrollAnimationScript: file(relativePath: { eq: "scripts/scroll-animation.js" }) {
            publicURL
         }
         site {
            siteMetadata {
               title
               siteUrl
               siteType
               description
               bigDescription
               smallDescription
               twitterUserName
            }
         }
      }
   `);
   const secondaryLogoSrc = data.secondaryLogo.childImageSharp.gatsbyImageData.images.fallback.src;
   const { title, siteUrl, bigDescription, smallDescription, twitterUserName, siteType } = data.site.siteMetadata;

   useEffect(() => {
      // google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
         dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-QTHZYEYQSS");
   }, []);

   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={bigDescription} />
         {/*  Open Graph Meta Tags and Twitter Cards */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content={twitterUserName} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={smallDescription} />
         <meta name="twitter:image" content={siteUrl + secondaryLogoSrc} />

         <meta property="og:type" content={siteType} />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={smallDescription} />
         <meta property="og:url" content={siteUrl} />
         <meta property="og:image" content={secondaryLogoSrc} />
         <meta property="og:image:width" content="600" />
         <meta property="og:image:height" content="600" />
         <meta property="og:image: alt" content="personal image" />
         {/* scripts */}
         <script src={data.scrollAnimationScript.publicURL} defer />
         {/* Google tag (gtag.js) */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-QTHZYEYQSS"></script>
      </Helmet>
   );
}

export default Seo;
