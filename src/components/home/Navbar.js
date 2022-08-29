import React from "react";
import { landingPageSections, mySocialMedias } from "data";
import { useGlobalContext } from "hooks";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { StyledNavbar, StyledNavLink, Hr, DividerContainer, NavbarContainer } from "./styles";

const Divider = () => (
   <DividerContainer>
      <Hr />
   </DividerContainer>
);

function NavBar() {
   const { isDarkModeEnabled, changeThemeMode } = useGlobalContext();

   const navigationLinksElements = [...landingPageSections].map(([name, { link, Icon }]) => {
      return (
         <StyledNavLink key={name} href={link} title={name} aria-label={name}>
            <Icon aria-hidden="true" />
         </StyledNavLink>
      );
   });

   const socialMediasLinksElements = [...mySocialMedias].map(([name, { link, Icon }]) => {
      return (
         <StyledNavLink key={name} target="_blank" rel="noreferrer" href={link} title={name} aria-label={name}>
            <Icon aria-hidden="true" />
         </StyledNavLink>
      );
   });

   return (
      <StyledNavbar>
         <NavbarContainer>
            {navigationLinksElements}
            <Divider />
            {socialMediasLinksElements}
            <Divider />
            <StyledNavLink
               aria-label="toggle theme mode"
               title="toggle theme mode"
               as="button"
               onClick={() => changeThemeMode(isDarkModeEnabled ? "light" : "dark")}
            >
               {isDarkModeEnabled ? <MdDarkMode aria-hidden="true" /> : <MdOutlineLightMode aria-hidden="true" />}
            </StyledNavLink>
         </NavbarContainer>
      </StyledNavbar>
   );
}

export default NavBar;
