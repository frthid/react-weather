import React from "react";
import s from "./Header.module.scss";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";
import { useTheme } from "../../hooks/useTheme";

function Header() {
  const theme = useTheme();

  const options = [
    { value: "city-1", label: "Москва" },
    { value: "city-2", label: "Санкт-Петербург" },
    { value: "city-3", label: "Новосибирск" },
  ];


  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.theme === "dark" ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      borderRadius: "10px",
      zIndex: "100",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === "dark" ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === "light" ? "dark" : "light")
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
}

export default Header;
