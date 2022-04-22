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

interface Errors {
  password: string;
  email: string;
}
interface Login {
  heading: string;
  email: string;
  password: string;
  passwordInstruction: string;
  submit: string;
  close: string;
  errors: Errors;
}

interface Sections {
  museum: string;
  visit: string;
  expositions: string;
  broadcasts: string;
}

interface Menus {
  mainMenu: string;
  buttonsMenu: string;
}

interface Gallery {
  title: string;
  prev: string;
  next: string;
  current: string;
  gallery: string;
  fridays: string;
  mummies: string;
  egypt: string;
  count: string;
}

interface CTAS {
  buy: string;
  friend: string;
  shop: string;
}

export enum Schedule {
  all = "all",
  now = "now",
  planned = "planned",
}

interface Card {
  title: string;
  subtitle?: string;
  description: string;
  schedule?: (string | Schedule)[];
}

export enum ExpositionsNames {
  richter = "richter",
  tattoo = "tattoo",
  matisse = "matisse",
}

interface Expositions {
  [ExpositionsNames.richter]: Card;
  [ExpositionsNames.tattoo]: Card;
  [ExpositionsNames.matisse]: Card;
  cta: string;
  show: string;
  all: string;
  now: string;
  planned: string;
}

export enum MuseumsNames {
  richter = "richter",
  museion = "museion",
  main = "main",
  learning = "learning",
  private = "private",
  gallery = "gallery",
}

interface Museums {
  [MuseumsNames.richter]: Card;
  [MuseumsNames.museion]: Card;
  [MuseumsNames.main]: Card;
  [MuseumsNames.learning]: Card;
  [MuseumsNames.private]: Card;
  [MuseumsNames.gallery]: Card;
  cta: string;
  show: string;
  buildings: string;
  history: string;
  historyText: string;
}

interface Footer {
  a11y: string;
  ticketing: string;
  anticorruption: string;
  facebook: string;
  telegram: string;
  email: string;
  subscribeHeader: string;
  subscribe: string;
  gdpr: string;
  social: string;
  menu: string;
}

interface Meta {
  title: string;
  description: string;
}

interface Search {
  label: string;
  submit: string;
  hint: string;
  suggestions: string;
  count: string;
}

interface Theme {
  light: string;
  dark: string;
  lightA: string;
  darkA: string;
}

export interface Dictionary {
  logo: string;
  locale: string;
  buttons: Buttons;
  search: Search;
  login: Login;
  sections: Sections;
  menus: Menus;
  gallery: Gallery;
  ctas: CTAS;
  expositions: Expositions;
  museums: Museums;
  footer: Footer;
  meta?: Meta;
  skipToMain: string;
  theme: Theme;
}

export interface Dictionaries {
  ru: Dictionary;
  en: Dictionary;
}

export enum Languages {
  ru = "ru",
  en = "en",
}
