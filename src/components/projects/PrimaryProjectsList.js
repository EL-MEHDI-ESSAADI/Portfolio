import React from "react";
import { projectsData } from "data";
import PrimaryProject from "./primaryProject";
import { graphql, useStaticQuery } from "gatsby";

function PrimaryProjectsList() {
   const data = useStaticQuery(graphql`
      {
         allFile(filter: { relativeDirectory: { eq: "images/projects" } }) {
            nodes {
               publicURL
               name
            }
         }
      }
   `);

   const PrimaryProjectsElements = projectsData.primary.map((singleProjectData) => {
      const imgSrc = data.allFile.nodes.find(({ name }) => name === singleProjectData.imgName).publicURL;

      return <PrimaryProject key={singleProjectData.id} {...singleProjectData} imgSrc={imgSrc} />;
   });

   return <div>{PrimaryProjectsElements}</div>;
}

export default PrimaryProjectsList;
