import React from "react";
import { Container } from "components/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import PrimaryProjectsList from "./PrimaryProjectsList";
import SecondaryProjectsList from "./SecondaryProjectsList";
import { graphql, useStaticQuery } from "gatsby";

// styles
const BulbImgContainer = styled.span`
   position: relative;
   top: 3px;
   display: inline-block;
   width: 1em;
   height: 1em;
`;
const Paragraph = styled.p`
   margin-block: 1rem 2.5rem;
   font-size: 1.1rem;
   @media (min-width: 576px) {
      font-size: 1.25rem;
   }
`;


// components

function Projects() {
   const bulbImgData = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "images/bulb.png" }) {
            childImageSharp {
               gatsbyImageData
            }
         }
      }
   `);

   return (
      <section id="projects">
         <Container>
            <h2 className="fs-1 fadeInScrollElement">
               Projects{" "}
               <BulbImgContainer aria-hidden="true">
                  <GatsbyImage image={bulbImgData.file.childImageSharp.gatsbyImageData} alt=""/>
               </BulbImgContainer>
            </h2>
            <Paragraph className="fadeInScrollElement">Some project I’ve been working on in the past few months:</Paragraph>
            <PrimaryProjectsList />
            <Paragraph className="fadeInScrollElement">Other noteworthy projects :</Paragraph>
            <SecondaryProjectsList />
         </Container>
      </section>
   );
}

export default Projects;
