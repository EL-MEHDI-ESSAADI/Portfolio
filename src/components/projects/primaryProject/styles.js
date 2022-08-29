import styled from "styled-components";

export const StyledLink = styled.a`
   --link-bg-color: var(--cl-primary-300);
   position: relative;
   padding: 0.47rem 1.1rem;
   font-weight: 700;
   color: var(--cl-white);
   background-color: var(--link-bg-color);
   user-select: none;
   transform: rotate(-2deg);

   &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border: 1.5px solid var(--link-bg-color);
      transform: translate(0.3rem, -0.3rem);
      transition: var(--trn-fast-smooth-all);
   }
   &:hover::after,
   &:focus-visible::after {
      transform: translate(0.2rem, -0.2rem);
   }
`;

export const InfoContainer = styled.div`
   flex: 1;
`;

export const ImgContainer = styled.div`
   order: -1;
   align-self: center;
   width: min(100%, 500px);
   box-shadow: ${({ isDarkModeEnabled }) =>
      isDarkModeEnabled
         ? "0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 20%)"
         : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};

   @media (min-width: 768px) {
      width: clamp(21.875rem, 45.5vw, 31.25rem);
      order: 1;
   }

   img {
      width: auto;
      height: auto;
   }
`;

export const Paragraph = styled.p`
   text-align: justify;

   a {
      text-decoration: underline;
      transition: var(--trn-fast-smooth-color);
      &:hover,
      &:focus {
         color: var(--cl-accent);
      }
   }
`;

export const StyledProject = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 2rem;

   &:nth-of-type(n + 2) ${ImgContainer} {
      @media (min-width: 768px) {
         order: -1;
      }
   }

   &:not(:first-child) {
      margin-top: 3rem;
   }

   @media (min-width: 768px) {
      flex-direction: row;
   }
`;
