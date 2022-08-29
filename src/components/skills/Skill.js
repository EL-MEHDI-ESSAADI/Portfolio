import React from "react";
import styled from "styled-components";

// styles
const Img = styled.img`
   width: 4.375rem;
   height: 4.375rem;
   object-fit: contain;
   filter: drop-shadow(2px 4px 1px var(--cl-shadow));
`;

const StyledSkill = styled.div`
   display: grid;
   gap: 1rem;
   justify-items: center;
`;

const Paragraph = styled.p`
   max-width: 10ch;
   text-align: center;
`;

// components
function Skill(props) {
   return (
      <StyledSkill data-fade-delay={props.index * 0.03 + "s"} className="fadeInScrollElement">
         <Img src={props.imgSrc} loading="lazy" alt={props.name} />
         <Paragraph>{props.name}</Paragraph>
      </StyledSkill>
   );
}

export default Skill;
