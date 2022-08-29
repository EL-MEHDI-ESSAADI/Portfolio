import styled from "styled-components";

export const Paragraph = styled.p`
   max-width: 50ch;
   font-size: 1rem;
   @media (min-width: 576px) {
      font-size: 1.1rem;
   }

   a {
      text-decoration: underline;
      transition: var(--trn-fast-smooth-color);
      &:hover, &:focus {
         color: var(--cl-accent);
      }
   }
`;

export const FaceImgContainer = styled.span`
   position: relative;
   top: 3px;
   display: inline-block;
   width: 1em;
   height: 1em;
`;

export const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;

   @media (min-width: 768px) {
      flex-direction: row;
   }
`;


export const ParagraphsContainer = styled.div`
   flex: 1;
`;

export const PersonalImgContainer = styled.div`
   order: -1;
   border-radius: 50%;
   background-color: var(--cl-primary);
   box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
   overflow: hidden;
   @media (min-width: 768px) {
      order: 0;
      align-self: self-start;
      width: clamp(18.75rem, 29vw + 5rem, 22.875rem);
   }
`;
