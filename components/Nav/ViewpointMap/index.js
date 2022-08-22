/* eslint-disable @next/next/no-img-element */
import React from "react";
import icon from "public/icon/viewpointMap.svg";
import styles from "./index.module.scss";
const ViewpointMap = () => {
  return (
    <div className={styles.viewpointMap}>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>景點導覽</p>
    </div>
  );
};

export default ViewpointMap;
