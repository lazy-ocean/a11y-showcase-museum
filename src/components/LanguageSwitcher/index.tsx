import React, { useContext } from "react";
import Link from "next/link";
import { SecondaryButton } from "@a11y/components/Buttons";
import { LanguageContext, Languages } from "@a11y/utils";
import { LangWrapper } from "./LanguageSwitcher.styled";

const LanguageSwitcher = () => {
  const { language, dictionary, setLanguage } = useContext(LanguageContext);
  return (
    <LangWrapper>
      {language === Languages.en ? (
        <Link locale="ru" href="/" passHref>
          <SecondaryButton
            onClick={() => setLanguage(Languages.ru)}
            small
            aria-label={dictionary.buttons.langButtonRu}
            title={dictionary.buttons.langButtonRu}
          >
            RU
          </SecondaryButton>
        </Link>
      ) : (
        <Link locale="en" href="/" passHref>
          <SecondaryButton
            onClick={() => setLanguage(Languages.en)}
            small
            aria-label={dictionary.buttons.langButtonEn}
            title={dictionary.buttons.langButtonEn}
          >
            EN
          </SecondaryButton>
        </Link>
      )}
      <p className="visually-hidden" aria-atomic={true} aria-live="assertive">
        {dictionary.locale}
      </p>
    </LangWrapper>
  );
};

export default LanguageSwitcher;
