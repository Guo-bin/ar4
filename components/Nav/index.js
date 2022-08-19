import React from "react";
import Instruction from "./Instruction";
import LanguageGuide from "./LanguageGuide";
import ViewpointGuide from "./ViewpointGuide";
import Scan from "./Scan";
import ViewpointMap from "./ViewpointMap";
import LanguagePlayer from "components/LanguagePlayer";
import styles from "./index.module.scss";
import Player from "components/Player";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <Instruction />
        <LanguageGuide />
        <ViewpointGuide />
        <Scan />
        <ViewpointMap />
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
