import React from "react";
import { Container } from "components/styles";
import { StyledHome, Header, IntroHeading, SpanWithLinearGradient, Headline, ContactLink} from "./styles";
import NavBar from "./Navbar";
import { myEmailLink } from "data";

function Home() {
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
            <ContactLink className="mt-5" href={`mailto:${myEmailLink}`} rel="noreferrer" alt="contact">
               Sey Hello
            </ContactLink>
         </Container>
         <NavBar />
      </StyledHome>
   );
}

export default Home;
