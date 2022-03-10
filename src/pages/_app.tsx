import "../../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Main from "../components/Main";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { LanguageProvider } from "../utils/LanguageContext";
import Footer from "../components/Footer";

const MyApp = () => {
  /*  let testLintIsWorking = ""; */
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Header />
        <Menu />
        <Main />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default MyApp;
