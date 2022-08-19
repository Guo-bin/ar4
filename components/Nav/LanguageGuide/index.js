import React from "react";
import icon from "public/icon/languageGuide.svg";
import styles from "./index.module.scss";
const LanguageGuide = () => {
  return (
    <div className={styles.languageGuide}>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>族語導覽</p>
    </div>
  );
};

export default LanguageGuide;
