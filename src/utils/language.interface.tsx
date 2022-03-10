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

interface Sections {
  museum: string;
  visit: string;
  expositions: string;
  broadcasts: string;
}

interface Menus {
  mainMenu: string;
}

interface Gallery {
  title: string;
  prev: string;
  next: string;
  current: string;
  gallery: string;
}

export interface Dictionary {
  logo: string;
  buttons: Buttons;
  search: string;
  searchSubmit: string;
  login: Login;
  sections: Sections;
  menus: Menus;
  gallery: Gallery;
}

export interface Dictionaries {
  ru: Dictionary;
  en: Dictionary;
}

export enum Languages {
  ru = "ru",
  en = "en",
}
