import "../../styles/globals.css";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { useRouter } from "next/router";
import { LanguageProvider, Languages, dictionaryList } from "@a11y/utils";
import { Footer, Menu, Header, Main } from "@a11y/components";
import { GlobalStyles } from "../theme";
import useTheme, { ThemeType } from "@a11y/utils/useTheme";

const MyApp = () => {
  const { locale } = useRouter();
  const customStyle = "#gallery {display:none;}";
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{dictionaryList[locale as Languages]?.meta?.title}</title>
        <meta
          name="description"
          content={dictionaryList[locale as Languages]?.meta?.description}
        />
        <meta
          property="og:title"
          content={dictionaryList[locale as Languages]?.meta?.title}
          key="title"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <noscript>
          <style>{customStyle}</style>
        </noscript>
      </Head>
      <ThemeProvider theme={theme === ThemeType.light ? lightTheme : darkTheme}>
        <GlobalStyles />
        <LanguageProvider>
          <Header theme={theme} setTheme={setTheme} />
          <Menu />
          <Main />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
