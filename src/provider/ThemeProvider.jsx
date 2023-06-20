import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState("light");

  function changeTheme(theme) {
    setTheme(theme); 
    changeCssRootVariables(theme);  
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
