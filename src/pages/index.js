import React from "react";
import "globalStyles/index.scss";
import { AppProvider, Home, Seo, About, Projects, Skills, Footer } from "components";

function LandingPage() {
   return (
      <AppProvider>
         <Seo />
         <main>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Footer />
         </main>
      </AppProvider>
   );
}

export default LandingPage;
