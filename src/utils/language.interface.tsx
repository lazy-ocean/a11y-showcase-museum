export interface LangContextInterface {
  language: Languages;
  dictionary: Dictionary;
  setLanguage: (arg0: Languages) => void;
}

interface Buttons {
  loginButton: string;
  langButtonRu: string;
  langButtonEn: string;
}

export interface Dictionary {
  logo: string;
  buttons: Buttons;
  search: string;
  searchSubmit: string;
}

export interface Dictionaries {
  ru: Dictionary;
  en: Dictionary;
}

export enum Languages {
  ru = "ru",
  en = "en",
}
