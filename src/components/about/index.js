import React from "react";
import { Container } from "components/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Paragraph, FaceImgContainer, ContentContainer, ParagraphsContainer, PersonalImgContainer } from "./styles";

// components
function About() {
   const dynamicImagesData = useStaticQuery(graphql`
      {
         faceImg: file(relativePath: { eq: "images/face.png" }) {
            childImageSharp {
               gatsbyImageData
            }
         }
         personalImg: file(relativePath: { eq: "images/personalImage.png" }) {
            childImageSharp {
               gatsbyImageData(quality: 100)
            }
         }
      }
   `);

   const Cs50HarverdLinkEl = (
      <a target="_blank" rel="noreferrer" href="https://cs50.harvard.edu/x/2021">
         Harvard's CS50 course
      </a>
   );
   const upworkLinkEl = (
      <a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~0122698996f13d5ff3">
         Upwork
      </a>
   );
   const inHouseLinkEl = (
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/in-house6">
         In-house
      </a>
   );
   const ftFtLinkEl = (
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ftftapp">
         FtFt
      </a>
   );

   return (
      <section id="about">
         <Container>
            <h2 className="fs-1 fadeInScrollElement">
               About Me{" "}
               <FaceImgContainer aria-hidden="true">
                  <GatsbyImage image={dynamicImagesData.faceImg.childImageSharp.gatsbyImageData} alt="" />
               </FaceImgContainer>
            </h2>
            <ContentContainer className="mt-3">
               <ParagraphsContainer className="fadeInScrollElement">
                  <Paragraph>
                     My adventure in coding began in 2021 with {Cs50HarverdLinkEl}, a journey that turned into a passion for web
                     development. Since then, I've been transforming ideas into reality through codes and pixels.
                     <Paragraph className="mt-4">
                        In my professional voyage, I've navigated the world of freelancing on {upworkLinkEl}, honed my skills in
                        Next JS at {inHouseLinkEl}, and took flight at {ftFtLinkEl}, There, I played a significant role in the
                        frontend development of ftft.ma, an experience that tremendously honed my skills and proficiency.
                     </Paragraph>
                     <Paragraph className="mt-4">
                        When I'm not diving into codes, you'd find me on the football field, discovering new places, and spending
                        cherished moments with my family. I continue to learn, create, and strive to leave my mark in the world of
                        web development.
                     </Paragraph>
                  </Paragraph>
               </ParagraphsContainer>
               <PersonalImgContainer className="fadeInScrollElement">
                  <GatsbyImage image={dynamicImagesData.personalImg.childImageSharp.gatsbyImageData} alt="personal image" />
               </PersonalImgContainer>
            </ContentContainer>
         </Container>
      </section>
   );
}

export default About;
