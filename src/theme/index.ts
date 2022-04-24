import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: Palette;
    breakpoints: Breakpoints;
    spacing: Spacings;
    radius: string;
  }
}

interface Palette {
  primary: string;
  primaryLight: string;
  bg: string;
  bgLight: string;
  text: string;
  contrastText: string;
  grey: string;
  darkGrey: string;
}

interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Spacings {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

export const theme: DefaultTheme = {
  palette: {
    primary: "#5D16D5",
    primaryLight: "#b4b1e6",
    bg: "#f5f5f5",
    text: "#1b1b1b",
    contrastText: "#dedede",
    grey: "#c1c1c1",
    bgLight: "#fcfcfc",
    darkGrey: "#dedede",
  },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1200px)`,
  },
  spacing: {
    xs: "0.5rem",
    s: "1rem",
    m: "2rem",
    l: "4rem",
    xl: "6rem",
    xxl: "8rem",
  },
  radius: "8px",
};

export const lightTheme = {
  ...theme,
  palette: {
    primary: "#5D16D5",
    primaryLight: "#b4b1e6",
    bg: "#f5f5f5",
    text: "#1b1b1b",
    contrastText: "#fcfcfc",
    grey: "#e8e8e8",
    bgLight: "#fcfcfc",
    darkGrey: "#1b1b1b",
  },
};

export const darkTheme = {
  ...theme,
  palette: {
    primary: "#B690F9",
    primaryLight: "#b4b1e6",
    bg: "#121212",
    bgLight: "#383838",
    text: "#dedede",
    contrastText: "#121212",
    grey: "#323232",
    darkGrey: "#1b1b1b",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.text};
    transition: background-color 0.5s ease-in-out;
  }
`;
