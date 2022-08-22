/* eslint-disable @next/next/no-img-element */
import React from "react";
import pause from "public/icon/pause.svg";
import styles from "./index.module.scss";
const Pause = ({ handleClick }) => {
  return (
    <div className={styles.pause} onClick={() => handleClick()}>
      <img src={pause.src} alt='' />
    </div>
  );
};

export default Pause;
