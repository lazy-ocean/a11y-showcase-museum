import "../../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Main from "../components/Main";
import { LanguageProvider } from "../utils/LanguageContext";

const MyApp = () => {
  /*  let testLintIsWorking = ""; */
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default MyApp;
