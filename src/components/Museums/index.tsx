import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import Tabs, { TabsButton } from "../Tabs";
import galleryImg from "../../../public/museum-gallery.png";
import learningImg from "../../../public/museum-learning.png";
import lopuchinyImg from "../../../public/museum-lopuchiny.png";
import museionImg from "../../../public/museum-museion.png";
import privateImg from "../../../public/museum-private.png";
import richterImg from "../../../public/museum-richter.png";
import Card from "../Card";
import { RegularText } from "../Typography";

const Museums = () => {
  const { dictionary } = useContext(LanguageContext);
  const dataMap = {
    richter: {
      img: richterImg.src,
      title: dictionary.museums.richter.title,
      address: dictionary.museums.richter.description,
      cta: dictionary.museums.cta,
    },
    museion: {
      img: museionImg.src,
      title: dictionary.museums.museion.title,
      address: dictionary.museums.museion.description,
      cta: dictionary.museums.cta,
    },
    lopuchiny: {
      img: lopuchinyImg.src,
      title: dictionary.museums.lopuchiny.title,
      address: dictionary.museums.lopuchiny.description,
      cta: dictionary.museums.cta,
    },
    learning: {
      img: learningImg.src,
      title: dictionary.museums.learning.title,
      address: dictionary.museums.learning.description,
      cta: dictionary.museums.cta,
    },
    privates: {
      img: privateImg.src,
      title: dictionary.museums.privates.title,
      address: dictionary.museums.privates.description,
      cta: dictionary.museums.cta,
    },
    gallery: {
      img: galleryImg.src,
      title: dictionary.museums.gallery.title,
      address: dictionary.museums.gallery.description,
      cta: dictionary.museums.cta,
    },
  };
  const History = (
    <>
      <RegularText
        className="history"
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
    />
  );
};

export default Museums;
