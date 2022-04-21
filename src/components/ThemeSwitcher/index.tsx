import React, { useContext } from "react";
import { LanguageContext } from "@a11y/utils";
import { Button } from "./ThemeSwitcher.styled";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeType } from "@a11y/utils/useTheme";

interface HeaderProps {
  theme: ThemeType;
  setTheme: (arg0: ThemeType) => void;
}

const ThemeSwitcher = ({ theme, setTheme }: HeaderProps) => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <>
      <Button
        onClick={() =>
          setTheme(theme === ThemeType.light ? ThemeType.dark : ThemeType.light)
        }
        aria-label={
          theme === ThemeType.light
            ? dictionary.theme.dark
            : dictionary.theme.light
        }
      >
        {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </Button>

      <p className="visually-hidden" aria-atomic={true} aria-live="assertive">
        {theme === ThemeType.light
          ? dictionary.theme.lightA
          : dictionary.theme.darkA}
      </p>
    </>
  );
};

export default ThemeSwitcher;
