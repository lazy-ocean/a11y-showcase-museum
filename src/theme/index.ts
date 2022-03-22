interface Palette {
  mainPurple: string;
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
    mainPurple: "#5D16D5",
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
    xs: "1rem",
    s: "2rem",
    m: "4rem",
    xxl: "12rem",
  },
  radius: "8px",
};

export default theme;
