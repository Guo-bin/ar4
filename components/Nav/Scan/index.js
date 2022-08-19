import React from "react";
import icon from "public/icon/scan.svg";
import styles from "./index.module.scss";
const Scan = () => {
  return (
    <div className={styles.scan}>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>掃描</p>
    </div>
  );
};

export default Scan;
