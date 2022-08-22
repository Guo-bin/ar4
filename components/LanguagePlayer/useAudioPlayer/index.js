import { useState, useEffect, useMemo } from "react";

function useAudioPlayer() {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState();
  const [clickedTime, setClickedTime] = useState(false);
  const [volume, setVolume] = useState();
  const [clickVolume, setClickVolume] = useState(null);
  const [isLoadData, setIsLoadData] = useState(false);
  //   const [source, setSource] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const [gain, setgain] = useState(null);

  //   useMemo();
  //   if (trigger && window) {
  //     const audio = document.getElementById("audio");
  //     audioContext = new window.AudioContext();
  //     gainNode = audioContext.createGain();
  //     setSource((preState) => {
  //       let a = preState || audioContext.createMediaElementSource(audio);
  //       a.connect(gainNode).connect(audioContext.destination);
  //       return a;
  //     });
  //     console.log("HIHIHI");
  //   }

  const setVolumeXX = () => {
    if (trigger) {
      const audio = document.getElementById("audio");
      let audioContext = new window.AudioContext();
      let gainNode = audioContext.createGain();
      let source = audioContext.createMediaElementSource(audio);
      let filter = audioContext.createBiquadFilter();

      filter.type = 0;
      source.connect(gainNode).connect(audioContext.destination);
      setgain(gainNode);
      setTrigger(false);
    }
    audio.addEventListener("timeupdate", () => {
      setAudioTime();
    });
  };
  const setAudioTime = () => setCurTime(audio.currentTime);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const audio = document.getElementById("audio");
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
      setVolume(audio.volume);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);
    const setAudioVolume = () => {
      gain.gain.value = clickVolume;
      setVolume(audio.volume);
    };

    // DOM listeners: update React state on DOM events
    if (!isLoadData) {
      setAudioData();
      setIsLoadData(true);
    }

    // audio.addEventListener("volumechange", setAudioVolume);
    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setAudioTime();
      setClickedTime(null);
    }

    if (clickVolume) {
      audio.volume = clickVolume;
      setAudioVolume();
      // gainNode.gain.value = audio.volume;

      setClickVolume(null);
    }
    if (curTime == duration) {
      setPlaying(false);
    }
    // effect cleanup
    return () => {
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return {
    curTime,
    duration,
    playing,
    volume,
    setPlaying,
    setClickedTime,
    setClickVolume,
    setVolumeXX,
  };
}

export default useAudioPlayer;
