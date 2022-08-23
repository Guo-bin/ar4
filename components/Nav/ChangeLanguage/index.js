import React from "react";
import icon from "public/images/icon/changeLanguage.svg";
import styles from "./index.module.scss";
const ChangeLanguage = () => {
  return (
    <div className={styles.changeLanguage}>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>切換語系</p>
    </div>
  );
};

export default ChangeLanguage;
