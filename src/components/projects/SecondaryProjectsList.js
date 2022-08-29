import React from "react";
import styled from "styled-components";
import { projectsData } from "data";
import SecondaryProject from "./SecondaryProject";

// styles
const ProjectsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   `;

// components
function SecondaryProjectsList() {
   const secondaryProjectsElements = projectsData.secondary.map((SingleProjectData, index) => (
      <SecondaryProject key={SingleProjectData.id} {...SingleProjectData} index={index}/>
   ));

   return <ProjectsContainer>{secondaryProjectsElements} </ProjectsContainer>;
}

export default SecondaryProjectsList;
