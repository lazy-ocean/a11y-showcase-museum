import React, { useState, createContext, FC } from "react";
import { dictionaryList, Dictionary, Languages } from "./translations";

interface LangContextInterface {
  dictionary: Dictionary;
  setLanguage: (arg0: Languages) => void;
}

export const LanguageContext = createContext<LangContextInterface>({
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
    dictionary: dictionaryList[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
