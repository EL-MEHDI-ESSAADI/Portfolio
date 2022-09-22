import styled, { keyframes } from "styled-components";
import { PrimaryLink } from "components/styles";

export const StyledHome = styled.section`
   display: grid;
   grid-template-rows: min-content;
   min-height: 100vh;
`;

export const SpanWithLinearGradient = styled.span`
   color: transparent;
   background-image: linear-gradient(
      90.2deg,
      var(--cl-primary-200),
      var(--cl-accent) 44.43%,
      var(--cl-primary-200)
   );
   -webkit-background-clip: text;
   background-clip: text;
`;

const showAnimation = keyframes`
   to{
      transform: translateY(0rem);
      opacity: 1;
   }
`;

const initialTransformAndOpacity = `
   transform: translateY(1rem);
   opacity: 0;
`;

const TRANSITION_TIME = ".4s";

const DELAY_TIMES = {
   introHeading: "0.2s",
   headline: "0.4s",
   contactLink: "0.6s",
   navbar: "0.8s",
};

export const Header = styled.header`
   padding-block: 1.2rem;
   padding-left: clamp(1rem, 4vw - 1rem, 2rem);
   ${initialTransformAndOpacity}
   animation: ${showAnimation} ${TRANSITION_TIME} ease-out both;
`;

export const IntroHeading = styled.h1`
   font-size: clamp(1.6rem, 2.8vw + 1rem, 2.1rem);
   ${initialTransformAndOpacity}
   animation: ${showAnimation} ${TRANSITION_TIME} ${DELAY_TIMES.introHeading} ease-out both;

   @media (min-width: 576px) {
      font-size: calc(1.425rem + 2.1vw);
   }
`;

export const Headline = styled.p`
   font-size: 1rem;
   ${initialTransformAndOpacity}
   animation: ${showAnimation} ${TRANSITION_TIME} ${DELAY_TIMES.headline} ease-out both;

   @media (min-width: 576px) {
      font-size: 1.25rem;
   }
`;

export const ResumeLink = styled(PrimaryLink)`
   ${initialTransformAndOpacity}
   animation: ${showAnimation} ${TRANSITION_TIME} ${DELAY_TIMES.contactLink} ease-out both;
`;

export const StyledNavbar = styled.nav`
   justify-self: center;
   align-self: end;
   padding: 0.7rem clamp(0.375rem, 5.5vw - 1rem, 2rem);
   margin-top: 2rem;
   border: 1px solid var(--cl-nav-bar-border);
   border-radius: 1.5rem;
   background-color: var(--cl-nav-bar-bg);
   box-shadow: -24px 24px 64px var(--cl-nav-bar-box-shadow);
   transition: var(--trn-fast-smooth-color);
   ${initialTransformAndOpacity}
   animation: ${showAnimation} ${TRANSITION_TIME} ${DELAY_TIMES.navbar} ease-out both;

   @media (min-width: 576px) {
      padding-block: 1rem;
   }
`;

export const StyledNavLink = styled.a`
   display: flex;
   padding: clamp(0.625rem, 5vw - 1.25rem, 1rem);
   border-radius: 1rem;
   font-size: clamp(1rem, 1.5vw + 1rem, 2rem);
   color: var(--cl-nav-bar-unactive-icon-fill);
   background-color: var(--cl-nav-bar-unactive-icon-bg);
   transition: var(--trn-fast-smooth-all);

   &:hover,
   &:focus-visible {
      color: var(--cl-nav-bar-active-icon-fill);
      background-color: var(--cl-nav-bar-active-icon-bg);
      transform: scale(1.05);
   }
`;

export const Hr = styled.hr`
   height: 60%;
   width: 1px;
   background-color: var(--cl-nav-bar-divider);
   border: none;
   border-radius: 0.5rem;
`;
export const DividerContainer = styled.div`
   display: flex;
   align-items: center;
`;

export const NavbarContainer = styled.div`
   display: flex;
   gap: clamp(0.375rem, 5.7vw - 1rem, 1rem); ;
`;
