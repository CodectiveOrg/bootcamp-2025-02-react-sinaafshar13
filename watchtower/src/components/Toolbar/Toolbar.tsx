import { ReactNode, useContext } from "react";

import { ThemeContext } from "../../context/theme-context";

import TextInput from "../../module/TextInput/TextInput";
import Select from "../../module/Select/Select";
import Button from "../../module/Button/Button";

import styles from "./Toolbar.module.css";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine";
import MingcuteSunLine from "../../icons/MingcuteSunLine";
import IcRoundTranslate from "../../icons/IcRoundTranslate";
import { useTranslation } from "react-i18next";

const Toolbar = (): ReactNode => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { i18n } = useTranslation();

  return (
    <div
      className={styles.toolbar}
      style={{ fontFamily: "Shadows Into Light, cursive" }}
    >
      <TextInput
        className={styles.input}
        placeholder="Search media..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select
        variant="solid"
        options={[
          { value: "all", label: "All" },
          { value: "movie", label: "Movie" },
          { value: "series", label: "Series" },
          { value: "book", label: "Book" },
        ]}
      ></Select>
      <Button
        variant="solid"
        size="large"
        shape="square"
        onClick={() => toggleTheme()}
      >
        {theme === "dark" ? <MingcuteSunLine /> : <MingcuteMoonLine />}
      </Button>
    </div>
  );
};

export default Toolbar;
