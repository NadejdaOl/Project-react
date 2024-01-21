import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getThemeClasses = () => (theme === "dark" ? "dark-theme" : "");

  const contextValue = { theme, toggleTheme, getThemeClasses };

  useEffect(() => {
    document.body.className = getThemeClasses();
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
