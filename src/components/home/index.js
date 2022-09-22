import React from "react";
import { Container } from "components/styles";
import { StyledHome, Header, IntroHeading, SpanWithLinearGradient, Headline, ResumeLink } from "./styles";
import NavBar from "./Navbar";
import { graphql, useStaticQuery } from "gatsby";

function Home() {
   const {
      file: { publicURL: resumeUrl },
   } = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "documents/resume.pdf" }) {
            publicURL
         }
      }
   `);
   return (
      <StyledHome id="home">
         <Header className="display-4 text-primary ff-yellowtail">
            Mehdi<span className="text-accent">.</span>
         </Header>
         <Container>
            <IntroHeading>
               Hello!👋🏻 <br />
               My name is Mehdi <br /> I’m a Frontend <SpanWithLinearGradient>Developer</SpanWithLinearGradient>
            </IntroHeading>
            <Headline className="fw-400 text-body mt-3">
               I contribute to the web by building fast, accessible, and pretty web applications
            </Headline>
            <ResumeLink className="mt-5" href={resumeUrl} download rel="noreferrer" alt="resume">
               Resume
            </ResumeLink>
         </Container>
         <NavBar />
      </StyledHome>
   );
}

export default Home;
