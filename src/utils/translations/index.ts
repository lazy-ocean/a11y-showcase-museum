import ru from "./ru.json";
import en from "./en.json";

export interface Dictionary {
  logo: string;
}

interface Dictionaries {
  ru: Dictionary;
  en: Dictionary;
}

export enum Languages {
  ru = "ru",
  en = "en",
}

export const dictionaryList: Dictionaries = { ru, en };
