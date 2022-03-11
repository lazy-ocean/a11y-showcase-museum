import "../../styles/globals.css";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Main from "../components/Main";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { LanguageProvider } from "../utils/LanguageContext";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { dictionaryList } from "../utils/translations";
import { Languages } from "../utils/language.interface";

const MyApp = () => {
  const { locale } = useRouter();

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
      </Head>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <Header />
          <Menu />
          <Main />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
