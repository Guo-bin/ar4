import React, { useState, useEffect } from "react";

import axios from "axios";
const url =
  "https://sf1-scmcdn-tos.pstatp.com/goofy/ee/sce/hera/music/She-Sells-Sea-Shells.mp3";
const Player = () => {
  const [audioContext, setAudioContext] = useState();
  const [gainNode, setGainNode] = useState();
  const [song, setSong] = useState();
  const [data, setData] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const [source, setSource] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const setVolumeXX = () => {
    if (trigger) {
      let audioContext = new window.AudioContext();
      let source = audioContext.createBufferSource();
      audioContext.decodeAudioData(data).then((buffer) => {
        source.buffer = buffer;
      });
      let gainNode = audioContext.createGain();
      let filter = audioContext.createBiquadFilter();
      filter.type = 0;
      source.connect(gainNode).connect(audioContext.destination);
      source.start(0);
      const analyser = audioContext.createAnalyser();

      setSource(source);
      setAudioContext(audioContext);
      setGainNode(gainNode);
      setTrigger(false);
    }
  };
  const setCurrentTime = () => {
    audioContext.currentTime = 50;
  };
  useEffect(() => {
    async function fetData() {
      const url =
        "https://raw.githubusercontent.com/miko-github/miko-github/gh_assets/assets/sounds/Homayoun%20Shajarian%20-%20Arayeshe%20Ghaliz.mp3";
      const res = await axios.get(url, { responseType: "arraybuffer" });
      setData(res.data);
    }
    if (!isFetch) {
      fetData();
      setIsFetch(true);
    }

    console.log(audioContext);
    console.log(source);
    console.log(gainNode);
  });

  return (
    <div onClick={setVolumeXX}>
      index
      <button onClick={setCurrentTime}>setTime</button>
    </div>
  );
};

export default Player;
