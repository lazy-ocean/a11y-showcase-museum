import React, { useContext } from "react";
import Head from "next/head";
import { LanguageContext } from "../../utils/LanguageContext";

const NextHead = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Head>
      <html lang={"ru"} />
      <Head>
        <meta charSet="utf-8" />
        <title>kfkd</title>
        <meta name="description" content={dictionary?.meta?.description} />
        <meta
          property="og:title"
          content={dictionary?.meta?.title}
          key="title"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Head>
  );
};

export default NextHead;
