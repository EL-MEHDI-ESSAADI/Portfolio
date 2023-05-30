import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { mySkills } from "data";
import { Container } from "components/styles";
import Skill from "./Skill";
import { graphql, useStaticQuery } from "gatsby";

// styles
const BrainImgContainer = styled.span`
   position: relative;
   top: 3px;
   display: inline-block;
   width: 1em;
   height: 1em;
`;

const SkillsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 1.5rem;
`;

function Skills() {
   const imagesData = useStaticQuery(graphql`
      {
         brain: file(relativePath: { eq: "images/brain.png" }) {
            childImageSharp {
               gatsbyImageData
            }
         }
         skills: allFile(filter: { relativeDirectory: { eq: "images/skills" } }) {
            nodes {
               publicURL
               name
            }
         }
      }
   `);


   const skillsElements = mySkills.map((skillData, index) => {
      const imgSrc = imagesData.skills.nodes.find(({ name }) => name === skillData.imgName).publicURL;
      return <Skill key={index} {...skillData} index={index} imgSrc={imgSrc} />;
   });

   return (
      <section id="skills">
         <Container>
            <h2 className="fs-1 fadeInScrollElement">
               Skills{" "}
               <BrainImgContainer aria-hidden="true">
                  <GatsbyImage image={imagesData.brain.childImageSharp.gatsbyImageData} alt="" />
               </BrainImgContainer>
            </h2>
            <SkillsContainer className="mt-3">{skillsElements}</SkillsContainer>
         </Container>
      </section>
   );
}

export default Skills;
