import React, { useEffect } from "react";
import useAudioPlayer from "./useAudioPlayer";
import ProgressBar from "./ProgressBar";
import Play from "./Play";
import Pause from "./Pause";
import Volume from "./Volume";
import styles from "./index.module.scss";

const LanguagePlayer = () => {
  const {
    curTime,
    duration,
    playing,
    volume,
    setPlaying,
    setClickedTime,
    setClickVolume,
    setVolumeXX,
  } = useAudioPlayer();
  // useEffect(() => {
  //   function preventBehavior(e) {
  //     e.preventDefault();
  //   }
  //   document.addEventListener("touchmove", preventBehavior, { passive: false });
  // }, []);
  return (
    <div className={styles.languagePlayer}>
      <div className={styles.playButton}>
        {playing ? (
          <Pause
            handleClick={() => {
              setPlaying(false);
              console.log("HI");
            }}
          />
        ) : (
          <Play
            handleClick={() => {
              setPlaying(false);
            }}
            setVolumeXX={setVolumeXX}
          />
        )}
      </div>
      <div className={styles.progress}>
        <ProgressBar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
      <div className={styles.volume}>
        <Volume
          onVolumeUpdate={(volume) => setClickVolume(volume)}
          volume={volume}
          setVolumeXX={setVolumeXX}
        />
      </div>
      <div className={styles.close}></div>
      <audio
        src='https://sf1-scmcdn-tos.pstatp.com/goofy/ee/sce/hera/music/She-Sells-Sea-Shells.mp3'
        id='audio'
        type='audio/mpeg'
        crossOrigin='
        anonymous'
        preload='meta'></audio>
    </div>
  );
};

export default LanguagePlayer;
