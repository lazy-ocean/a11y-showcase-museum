import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { MainMenu, MenuItem } from "./Menu.styled";

const Menu = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <MainMenu aria-label={dictionary.menus.mainMenu}>
      <MenuItem>
        <a href="#">{dictionary.sections.museum}</a>
      </MenuItem>
      <MenuItem>
        <a href="#">{dictionary.sections.visit}</a>
      </MenuItem>
      <MenuItem>
        <a href="#">{dictionary.sections.expositions}</a>
      </MenuItem>
      <MenuItem>
        <a href="#">{dictionary.sections.broadcasts}</a>
      </MenuItem>
    </MainMenu>
  );
};

export default Menu;
