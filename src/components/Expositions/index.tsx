import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import Tabs, { TabsButton } from "../Tabs";
import richterImg from "../../../public/schedule-1.png";
import tattooImg from "../../../public/schedule-2.png";
import matisseImg from "../../../public/schedule-3.png";
import Card from "../Card";

const Expositions = () => {
  const { dictionary } = useContext(LanguageContext);

  const dataMap = {
    richter: {
      img: richterImg.src,
      title: dictionary.expositions.richter.title,
      subtitle: dictionary.expositions.richter.subtitle,
      description: dictionary.expositions.richter.description,
      cta: dictionary.expositions.cta,
    },
    tattoo: {
      img: tattooImg.src,
      title: dictionary.expositions.tattoo.title,
      subtitle: dictionary.expositions.tattoo.subtitle,
      description: dictionary.expositions.tattoo.description,
      cta: dictionary.expositions.cta,
    },
    matisse: {
      img: matisseImg.src,
      title: dictionary.expositions.matisse.title,
      subtitle: dictionary.expositions.matisse.subtitle,
      description: dictionary.expositions.matisse.description,
      cta: dictionary.expositions.cta,
    },
  };

  const buttons: TabsButton[] = [
    { id: 1, title: dictionary.expositions.all },
    { id: 2, title: dictionary.expositions.now },
    { id: 3, title: dictionary.expositions.planned },
  ];

  const content = [
    { content: <Card {...dataMap.richter} />, ids: [1, 2] },
    { content: <Card {...dataMap.tattoo} />, ids: [1, 2] },
    { content: <Card {...dataMap.matisse} />, ids: [1, 3] },
  ];
  return (
    <Tabs
      title={dictionary.sections.expositions}
      buttons={buttons}
      content={content}
    />
  );
};

export default Expositions;
