interface Palette {
  mainPurple: string;
  secondaryPurple: string;
  white: string;
  dark: string;
}

interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Theme {
  palette: Palette;
  breakpoints: Breakpoints;
}

const theme: Theme = {
  palette: {
    mainPurple: "#5D16D5",
    secondaryPurple: "#C7D2E9",
    white: "#ffffff",
    dark: "#242424",
  },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1920px)`,
  },
};

export default theme;
