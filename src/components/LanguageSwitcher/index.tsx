import React, { useContext } from "react";
import { SecondaryButton } from "../Buttons/Buttons";
import { LanguageContext } from "../../utils/LanguageContext";
import { Languages } from "../../utils/language.interface";
import { LangWrapper } from "./LanguageSwitcher.styled";
import Link from "next/link";

const LanguageSwitcher = () => {
  const { language, dictionary, setLanguage } = useContext(LanguageContext);
  return (
    <LangWrapper>
      <SecondaryButton
        onClick={() => setLanguage(Languages.ru)}
        small
        emphasized={language === Languages.ru}
        aria-label={dictionary.buttons.langButtonRu}
      >
        <Link locale="ru" href="/">
          RU
        </Link>
      </SecondaryButton>
      <SecondaryButton
        onClick={() => setLanguage(Languages.en)}
        small
        emphasized={language === Languages.en}
        aria-label={dictionary.buttons.langButtonEn}
      >
        <Link locale="en" href="/">
          EN
        </Link>
      </SecondaryButton>
    </LangWrapper>
  );
};

export default LanguageSwitcher;
