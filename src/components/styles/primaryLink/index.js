import styled from "styled-components";

const PrimaryLink = styled.a`
   --primary-link-border-radius: 0.5rem;
   --primary-link-bg-color: var(--cl-primary-300);

   position: relative;
   padding: 0.7rem 2.5rem;
   border-radius: var(--primary-link-border-radius);
   font-size: 1.2rem;
   font-weight: 500;
   color: var(--cl-white);
   background-color: var(--primary-link-bg-color);
   transition: var(--trn-fast-smooth-all);
   &:hover,
   &:focus-visible {

      &::after {
         transform: translate(0.4rem, -0.4rem);
      }
   }

   &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border: 2px solid var(--primary-link-bg-color);
      border-radius: var(--primary-link-border-radius);
      transform: translate(0.6rem, -0.6rem);
      transition: var(--trn-fast-smooth-all);
   }
`;

export default PrimaryLink;
