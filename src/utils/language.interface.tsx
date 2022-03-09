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

interface Login {
  heading: string;
  email: string;
  password: string;
  passwordInstruction: string;
  submit: string;
  close: string;
}

export interface Dictionary {
  logo: string;
  buttons: Buttons;
  search: string;
  searchSubmit: string;
  login: Login;
}

export interface Dictionaries {
  ru: Dictionary;
  en: Dictionary;
}

export enum Languages {
  ru = "ru",
  en = "en",
}
