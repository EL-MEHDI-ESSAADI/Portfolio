import React from "react";
import styled from "styled-components";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useGlobalContext} from "hooks";

const ICONS_FS = "1.2rem";

// styles
const StyledSecondaryProject = styled.article`
   --linear-gradient: linear-gradient(235deg, hsl(var(--cl-accent-hsl) / 30%), hsl(var(--cl-primary-hsl) / 20%));

   position: relative;
   display: grid;
   grid-template-rows: min-content min-content 1fr;
   align-items: flex-end;
   min-height: 180px;
   padding: 1.5rem 2rem;
   transition: var(--trn-fast-smooth-color);

   &::before {
      z-index: -1;
      filter: blur(3px);
      opacity: 0.8;
      background-image: var(--linear-gradient);
   }
   &::after {
      z-index: -1;
      background-color: var(--cl-body-bg);
      border: 2px solid transparent;
      border-image: var(--linear-gradient) 1;
   }
   &&::after,
   &&::before {
      content: "";
      position: absolute;
      inset: -2px;
   }
`;

const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
`;

const Link = styled.a`
   transition: var(--trn-fast-smooth-color);
   &:hover, &:focus {
      color: var(--cl-accent);
   }
`;
const SmallParagraph = styled.p`
   font-size: 14px;
`;

function SecondaryProject(props) {
   const { isDarkModeEnabled } = useGlobalContext();
   return (
      <StyledSecondaryProject
         className="fadeInScrollElement"
         data-fade-delay={props.index * 0.2 + "s"}
         isDarkModeEnabled={isDarkModeEnabled}
         id={props.projectSectionId}
      >
         <Header>
            <h3 className="fs-5">{props.name}</h3>
            <div className="d-flex">
               <Link target="_blank" rel="noreferrer" href={props.githubRepoLink} aria-label="gitbub repo">
                  <FiGithub size={ICONS_FS} aria-hidden="true"/>
               </Link>
               <Link target="_blank" rel="noreferrer" href={props.demoLink} aria-label="demo">
                  <FiExternalLink size={ICONS_FS} aria-hidden="true"/>
               </Link>
            </div>
         </Header>
         <p className="mt-2">{props.description}</p>
         <SmallParagraph className="mt-3">{props.usedTechnologies}</SmallParagraph>
      </StyledSecondaryProject>
   );
}

export default SecondaryProject;
