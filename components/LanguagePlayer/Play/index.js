import React from "react";
import play_arrow from "public/icon/play_arrow.svg";
import styles from "./index.module.scss";
const Play = ({ handleClick, setVolumeXX }) => {
  return (
    <div
      className={styles.play}
      onClick={() => {
        handleClick();
        setVolumeXX();
      }}>
      <img src={play_arrow.src} alt='' />
    </div>
  );
};
export default Play;
