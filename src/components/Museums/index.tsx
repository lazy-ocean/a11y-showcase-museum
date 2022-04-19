import React, { useContext } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import Tabs, { TabsButton } from "@a11y/components/Tabs";
import Card from "@a11y/components/Card";
import { RegularText } from "@a11y/components/Typography";

const Museums = () => {
  const { dictionary } = useContext(LanguageContext);
  const dataMap = {
    richter: {
      img: "/museum-richter.png",
      title: dictionary.museums.richter.title,
      address: dictionary.museums.richter.description,
      cta: dictionary.museums.cta,
    },
    museion: {
      img: "/museum-museion.png",
      title: dictionary.museums.museion.title,
      address: dictionary.museums.museion.description,
      cta: dictionary.museums.cta,
    },
    lopuchiny: {
      img: "/museum-lopuchiny.png",
      title: dictionary.museums.lopuchiny.title,
      address: dictionary.museums.lopuchiny.description,
      cta: dictionary.museums.cta,
    },
    learning: {
      img: "/museum-learning.png",
      title: dictionary.museums.learning.title,
      address: dictionary.museums.learning.description,
      cta: dictionary.museums.cta,
    },
    privates: {
      img: "/museum-private.png",
      title: dictionary.museums.privates.title,
      address: dictionary.museums.privates.description,
      cta: dictionary.museums.cta,
    },
    gallery: {
      img: "/museum-gallery.png",
      title: dictionary.museums.gallery.title,
      address: dictionary.museums.gallery.description,
      cta: dictionary.museums.cta,
    },
  };
  const History = (
    <>
      <RegularText
        className="history"
        tabIndex={0}
        dangerouslySetInnerHTML={{ __html: dictionary.museums.historyText }}
      />
    </>
  );

  const buttons: TabsButton[] = [
    { id: 1, title: dictionary.museums.buildings },
    { id: 2, title: dictionary.museums.history },
  ];

  const content = [
    { content: <Card {...dataMap.richter} />, ids: [1] },
    { content: <Card {...dataMap.museion} />, ids: [1] },
    { content: <Card {...dataMap.lopuchiny} />, ids: [1] },
    { content: <Card {...dataMap.learning} />, ids: [1] },
    { content: <Card {...dataMap.privates} />, ids: [1] },
    { content: <Card {...dataMap.gallery} />, ids: [1] },
    { content: History, ids: [2] },
  ];
  return (
    <Tabs
      title={dictionary.sections.expositions}
      buttons={buttons}
      content={content}
      id="msms"
    />
  );
};

export default Museums;
