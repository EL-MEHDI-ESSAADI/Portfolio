import React, { Fragment } from "react";
import { Container } from "components/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { myEmailLink, mentionedProjectsInAbout } from "data";
import { graphql, useStaticQuery } from "gatsby";
import {
   Paragraph,
   FaceImgContainer,
   ContentContainer,
   ParagraphsContainer,
   PersonalImgContainer,
} from "./styles";

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

   const projectsLinksElements = mentionedProjectsInAbout.map((project) => {
      const projectSectionId = project.projectSectionId;

      return (
         <Fragment key={project.id}>
            <a
               href={`#${projectSectionId}`}
               alt={project.descriptiveName}
               onClick={(e) => {
                  e.preventDefault();

                  const projectEl = document.getElementById(projectSectionId);

                  if (!projectEl) return;
                  projectEl.classList.add("outlined");
                  window.scrollTo(0, projectEl.offsetTop - 32);
                  setTimeout(
                     () =>
                        document.getElementById(projectSectionId) &&
                        document.getElementById(projectSectionId).classList.remove("outlined"),
                     1500
                  );
               }}
            >
               {project.descriptiveName}
            </a>
            ,{" "}
         </Fragment>
      );
   });

   const ContactLinkEl = (
      <a href={`mailto:${myEmailLink}`} alt="email">
         Contact me
      </a>
   );
   const Cs50HarverdLinkEl = <a target="_blank" rel="noreferrer" href="https://www.edx.org/cs50">CS50 Harvard course</a>;
   
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
                     Hi! My name is Mehdi Essaadi, My interest in web development started back in 2021 (COVID-19
                     time) while school was out, I decided to take the {Cs50HarverdLinkEl}, where I discovered my
                     passion for web development.
                     <br /> Since then I have been building professional web applications and landing pages such as{" "}
                     {projectsLinksElements}and much more.
                  </Paragraph>
                  <Paragraph className="mt-4">
                     I believe I’ve got the right skills and technologies to be the right Frontend Developer for
                     your business, {ContactLinkEl} now that’s the best for your business.
                  </Paragraph>
               </ParagraphsContainer>
               <PersonalImgContainer className="fadeInScrollElement">
                  <GatsbyImage
                     image={dynamicImagesData.personalImg.childImageSharp.gatsbyImageData}
                     alt="personal image"
                  />
               </PersonalImgContainer>
            </ContentContainer>
         </Container>
      </section>
   );
}

export default About;
