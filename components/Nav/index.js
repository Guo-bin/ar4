import React from "react";
import Instruction from "./Instruction";
import LanguageGuide from "./LanguageGuide";
import ViewpointGuide from "./ViewpointGuide";
import ViewpointMap from "./ViewpointMap";
import LanguagePlayer from "components/LanguagePlayer";
import ChangeLanguage from "./ChangeLanguage";
import styles from "./index.module.scss";
import Player from "components/Player";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <Instruction />
        <LanguageGuide />
        <ViewpointGuide />
        <ViewpointMap />
        <ChangeLanguage />
      </div>
      <div className={styles.languagePlayer}>
        {/* <Player /> */}
        {/* <LanguagePlayer /> */}
        {/* <audio src='./song.mp3' id='audio' controls></audio> */}
      </div>
    </nav>
  );
};

export default Nav;
