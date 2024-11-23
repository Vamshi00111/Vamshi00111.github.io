"use client";
import React from "react";

interface ThemeContextValue {
  setTheme: (theme: string) => void;
  logoUrl: string;
  aboutUrl: string;
  aboutUrlSmall: string;
}

const DARK_THEME_CONTEXT_VALUE: ThemeContextValue = {
  setTheme: () => {},
  logoUrl: "/Portfolio/images/logo.png",
  aboutUrl: "/Portfolio/images/doodle.jpeg",
  aboutUrlSmall: "/Portfolio/images/doodle.jpeg",
};

const LIGHT_THEME_CONTEXT_VALUE: ThemeContextValue = {
  setTheme: () => {},
  logoUrl: "/Portfolio/images/logo-light.png",
  aboutUrl: "/Portfolio/images/doodle.jpeg",
  aboutUrlSmall: "/Portfolio/images/doodle.jpeg",
};

const ThemeContext = React.createContext<ThemeContextValue>(
  DARK_THEME_CONTEXT_VALUE
);

interface Props extends React.PropsWithChildren<{}> {
  initialTheme: string;
}

const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [selectedTheme, setSelectedTheme] = React.useState(initialTheme);

  const value =
    selectedTheme === "dark"
      ? LIGHT_THEME_CONTEXT_VALUE
      : DARK_THEME_CONTEXT_VALUE;

  return (
    <ThemeContext.Provider value={{ ...value, setTheme: setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };
