import React from "react";
import { AppProvider, Seo } from "components";
import { Container, PrimaryLink } from "components/styles";
import { Link } from "gatsby";
import styled from "styled-components";
import "globalStyles/index.scss";

const StyledPageNotFound = styled(Container)`
   min-height: 100vh;
   display: grid;
   place-content: center;
   place-items: center;
`;

function PageNotFound() {
   return (
      <AppProvider>
         <Seo />
         <StyledPageNotFound>
            <h1 className="fs-1">Look like you're lost</h1>
            <p className="fs-4 mt-3">The page you are looking for not available!</p>
            <PrimaryLink to="/" as={Link} className="mt-5">
               Go to Home
            </PrimaryLink>
         </StyledPageNotFound>
      </AppProvider>
   );
}

export default PageNotFound;
