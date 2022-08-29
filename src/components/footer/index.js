import React from "react";
import { Container, PrimaryLink } from "components/styles";
import styled from "styled-components";
import { myEmailLink } from "data";

const ContentContainer = styled.div`
   display: grid;
   justify-items: center;
   margin-top: 1rem;
   text-align: center;
`;

const Nav = styled.nav`
   display: flex;
   gap: 1rem;

   a {
      transition: var(--trn-fast-smooth-color);
      &:hover, &:focus {
         color: var(--cl-accent);
      }
   }
`;


function Footer() {

   return (
      <footer>
         <Container>
            <h2 className="fs-1 fadeInScrollElement">
               What's Next?
            </h2>
            <ContentContainer className="fadeInScrollElement">
               <p>Need a Frontend Dev for your project or company?</p>
               <h3 className="fs-4 mt-3">Currently available for work!</h3>
               <PrimaryLink href={`mailto:${myEmailLink}`} className="mt-4">
                  Contact Now
               </PrimaryLink>
               <Nav className="d-flex mt-4">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#skills">Skills</a>
               </Nav>
            </ContentContainer>
         </Container>
      </footer>
   );
}

export default Footer;
