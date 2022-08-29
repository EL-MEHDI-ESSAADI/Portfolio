import React, { useEffect, useState } from "react";
import { GlobalContext } from "context";

function AppProvider({ children }) {
   const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
   const [userConfig, setUserConfig] = useState({});

   useEffect(() => {
      const userConfig = JSON.parse(localStorage.getItem("config")) || {};

      setUserConfig(userConfig);
      /*
         if user prefer dark mode or if isPreferDarkMode 
         undefined and the user using dark mode in his browser
      */
      if (
         userConfig.isPreferDarkMode ||
         (userConfig.isPreferDarkMode === undefined &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         setIsDarkModeEnabled(true);
      }
   }, []);

   useEffect(() => {
      document.body.classList[isDarkModeEnabled ? "add" : "remove"]("darkMode");
   }, [isDarkModeEnabled]);
   useEffect(() => {
      localStorage.setItem("config", JSON.stringify(userConfig));
   }, [userConfig]);

   function changeThemeMode(newMode) {
      setIsDarkModeEnabled(newMode === "dark" ? true : false);
      setUserConfig((oldValue) => ({ ...oldValue, isPreferDarkMode: newMode === "dark" ? true : false }));
   }

   return (
      <GlobalContext.Provider value={{ isDarkModeEnabled, changeThemeMode }}>{children}</GlobalContext.Provider>
   );
}

export default AppProvider;
