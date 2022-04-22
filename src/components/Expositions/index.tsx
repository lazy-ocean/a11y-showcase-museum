import React, { useContext } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import Tabs, { TabsButton } from "@a11y/components/Tabs";
import Card from "@a11y/components/Card";
import { ExpositionsNames, Schedule } from "@a11y/utils/language.interface";

const Expositions = () => {
  const { dictionary } = useContext(LanguageContext);

  const data: ExpositionsNames[] = [
    ExpositionsNames.richter,
    ExpositionsNames.tattoo,
    ExpositionsNames.matisse,
  ];

  const buttons: TabsButton[] = [
    { id: Schedule.all, title: dictionary.expositions.all },
    { id: Schedule.now, title: dictionary.expositions.now },
    { id: Schedule.planned, title: dictionary.expositions.planned },
  ];

  const content = data.map((item) => ({
    content: (
      <Card
        img={`/${item}.png`}
        title={dictionary.expositions[item].title}
        subtitle={dictionary.expositions[item].subtitle}
        description={dictionary.expositions[item].description}
        cta={dictionary.expositions.cta}
      />
    ),
    ids: dictionary.expositions[item]?.schedule || [],
  }));

  return (
    <Tabs
      title={dictionary.sections.expositions}
      buttons={buttons}
      content={content}
      id="expo"
    />
  );
};

export default Expositions;
