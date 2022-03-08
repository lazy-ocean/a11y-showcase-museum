import React, { useState, createContext, FC } from "react";
import { dictionaryList } from "./translations";
import { LangContextInterface, Languages } from "./language.interface";

export const LanguageContext = createContext<LangContextInterface>({
  language: Languages.ru,
  dictionary: dictionaryList.ru,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLanguage: () => {},
});

export const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<Languages>(Languages.en);

  /*   useEffect(() => {
    const defaultLanguage = window.localStorage.getItem("rcml-lang");
    if (defaultLanguage === "ru") setLanguage(Languages[defaultLanguage]);
  }, []); */

  const provider = {
    language: language,
    dictionary: dictionaryList[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
