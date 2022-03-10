import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import Tabs, { TabsButton } from "../Tabs";
import richterImg from "../../../public/schedule-1.png";
import tattooImg from "../../../public/schedule-2.png";
import matisseImg from "../../../public/schedule-3.png";
import {
  SecondaryHeading,
  TertiaryHeading,
  RegularText,
  Link,
} from "../Typography";

const Expositions = () => {
  const { dictionary } = useContext(LanguageContext);

  const Richter = (
    <article>
      <img src={richterImg.src} alt={dictionary.expositions.richter.title} />
      <SecondaryHeading>
        {dictionary.expositions.richter.title}
      </SecondaryHeading>
      <TertiaryHeading>
        {dictionary.expositions.richter.subtitle}
      </TertiaryHeading>
      <RegularText>{dictionary.expositions.richter.description}</RegularText>
      <Link
        aria-label={`${dictionary.expositions.cta} ${dictionary.expositions.richter.title}`}
        href="#"
      >
        {dictionary.expositions.cta}
      </Link>
    </article>
  );

  const Tattoo = (
    <article>
      <img src={tattooImg.src} alt={dictionary.expositions.tattoo.title} />
      <SecondaryHeading>{dictionary.expositions.tattoo.title}</SecondaryHeading>
      <TertiaryHeading>
        {dictionary.expositions.tattoo.subtitle}
      </TertiaryHeading>
      <RegularText>{dictionary.expositions.tattoo.description}</RegularText>
      <Link
        href="#"
        aria-label={`${dictionary.expositions.cta} ${dictionary.expositions.tattoo.title}`}
      >
        {dictionary.expositions.cta}
      </Link>
    </article>
  );

  const Matisse = (
    <article>
      <img src={matisseImg.src} alt={dictionary.expositions.matisse.title} />
      <SecondaryHeading>
        {dictionary.expositions.matisse.title}
      </SecondaryHeading>
      <TertiaryHeading>
        {dictionary.expositions.matisse.subtitle}
      </TertiaryHeading>
      <RegularText>{dictionary.expositions.matisse.description}</RegularText>
      <Link
        href="#"
        aria-label={`${dictionary.expositions.cta} ${dictionary.expositions.matisse.title}`}
      >
        {dictionary.expositions.cta}
      </Link>
    </article>
  );

  const buttons: TabsButton[] = [
    { id: 1, title: dictionary.expositions.all },
    { id: 2, title: dictionary.expositions.now },
    { id: 3, title: dictionary.expositions.planned },
  ];

  const content = [
    { content: Richter, ids: [1, 2] },
    { content: Tattoo, ids: [1, 2] },
    { content: Matisse, ids: [1, 3] },
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
