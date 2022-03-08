interface Palette {
  mainPurple: string;
  secondaryPurple: string;
  white: string;
  dark: string;
}

interface Theme {
  palette: Palette;
}

const theme: Theme = {
  palette: {
    mainPurple: "#5D16D5",
    secondaryPurple: "#C7D2E9",
    white: "#ffffff",
    dark: "#242424",
  },
};

export default theme;
