import "../../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Main from "../components/Main/Main";

const MyApp = () => {
  /*  let testLintIsWorking = ""; */
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default MyApp;
