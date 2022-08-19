import React from "react";
import icon from "public/icon/viewpointGuide.svg";
import styles from "./index.module.scss";
const ViewpointGuide = () => {
  return (
    <div className={styles.viewpointGuide}>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>景點介紹</p>
    </div>
  );
};

export default ViewpointGuide;
