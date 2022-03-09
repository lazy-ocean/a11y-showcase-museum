import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { MainMenu, MenuItem } from "./Menu.styled";

const Menu = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <nav aria-labelledby="mainmenulabel">
      <h2 id="mainmenulabel" className="visually-hidden">
        {dictionary.menus.mainMenu}
      </h2>
      <MainMenu>
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
    </nav>
  );
};

export default Menu;
