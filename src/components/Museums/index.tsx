import React, { useContext } from "react";
import { LanguageContext } from "@a11y/utils/LanguageContext";
import Tabs, { TabsButton } from "@a11y/components/Tabs";
import Card from "@a11y/components/Card";
import { RegularText } from "@a11y/components/Typography";
import { MuseumsNames } from "@a11y/utils/language.interface";

const Museums = () => {
  const { dictionary } = useContext(LanguageContext);

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

  const dataMap: MuseumsNames[] = [
    MuseumsNames.main,
    MuseumsNames.richter,
    MuseumsNames.museion,
    MuseumsNames.gallery,
    MuseumsNames.learning,
    MuseumsNames.private,
  ];

  const museumsComponents = dataMap.map((item) => ({
    content: (
      <Card
        img={`/museum-${item}.svg`}
        title={dictionary.museums[item].title}
        address={dictionary.museums[item].description}
        cta={dictionary.museums.cta}
      />
    ),
    ids: [1],
  }));

  const content = [...museumsComponents, { content: History, ids: [2] }];
  return (
    <Tabs
      title={dictionary.sections.museum}
      buttons={buttons}
      content={content}
      id="msms"
    />
  );
};

export default Museums;
