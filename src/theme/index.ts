interface Palette {
  mainPurple: string;
  secondaryPurple: string;
  white: string;
  dark: string;
  lightBG: string;
}

interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Spacings {
  small: string;
  medium: string;
  huge: string;
}

interface Theme {
  palette: Palette;
  breakpoints: Breakpoints;
  spacing: Spacings;
}

const theme: Theme = {
  palette: {
    mainPurple: "#5D16D5",
    secondaryPurple: "#C7D2E9",
    white: "#ffffff",
    dark: "#242424",
    lightBG: "#F9F9FB",
  },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1920px)`,
  },
  spacing: {
    small: "1rem",
    medium: "4rem",
    huge: "12rem",
  },
};

export default theme;
