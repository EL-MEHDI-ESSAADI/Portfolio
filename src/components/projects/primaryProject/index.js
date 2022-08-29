import React from "react";
import { useGlobalContext } from "hooks";
import { StyledLink, ImgContainer, InfoContainer, Paragraph, StyledProject } from "./styles";

function PrimaryProject(props) {
   const { isDarkModeEnabled } = useGlobalContext();

   return (
      <StyledProject id={props.projectSectionId}>
         <InfoContainer className="fadeInScrollElement">
            <h3 className="fs-3">{props.name}</h3>
            <Paragraph className="mt-4" dangerouslySetInnerHTML={{ __html: props.description }} />
            <p className="mt-2 ">{props.usedTechnologies}</p>
            <div className="d-flex mt-3 ">
               <StyledLink target="_blank" rel="noreferrer" href={props.demoLink}>
                  Demo
               </StyledLink>
               <StyledLink target="_blank" rel="noreferrer" href={props.githubRepoLink}>
                  Github Repo
               </StyledLink>
            </div>
         </InfoContainer>
         <ImgContainer className="fadeInScrollElement" isDarkModeEnabled={isDarkModeEnabled}>
            <img
               src={props.imgSrc}
               width={props.imgWidth}
               height={props.imgHight}
               loading="lazy"
               alt={`${props.name} project`}
            />
         </ImgContainer>
      </StyledProject>
   );
}

export default PrimaryProject;
