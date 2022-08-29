import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function ScrollAnimationScript() {
   const data = useStaticQuery(graphql`
      {
         scrollAnimationScript: file(relativePath: { eq: "scripts/scroll-animation.js" }) {
            publicURL
         }
      }
   `);

   return <script src={data.scrollAnimationScript.publicURL} defer/>;
}

export default ScrollAnimationScript;
