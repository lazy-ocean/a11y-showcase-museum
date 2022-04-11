interface Palette {
  darkPurple: string;
  mainPurple: string;
  lightPurple: string;
  secondaryPurple: string;
  white: string;
  dark: string;
  lightBG: string;
  grey: string;
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

interface Theme {
  palette: Palette;
  breakpoints: Breakpoints;
  spacing: Spacings;
  radius: string;
}

const theme: Theme = {
  palette: {
    darkPurple: "#46119e",
    mainPurple: "#5D16D5",
    lightPurple: "#b4b1e6",
    secondaryPurple: "#C7D2E9",
    white: "#ffffff",
    dark: "#242424",
    lightBG: "#F9F9FB",
    grey: "#F1F1F1",
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

export default theme;
