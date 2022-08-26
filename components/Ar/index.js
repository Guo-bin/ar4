import React, { useEffect, useRef, useState } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import styles from "./index.module.scss";
export default () => {
  const sceneRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    if (sceneEl) {
      const arSystem = sceneEl.systems["mindar-image-system"];
      sceneEl.addEventListener("renderstart", () => {
        arSystem.start(); // start AR
        console.log("start");
      });
    }
    return () => {
      arSystem.stop();
    };
  }, [sceneRef.current]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   console.log(sceneRef);
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <a-scene
          ref={sceneRef}
          mindar-image='imageTargetSrc: /mind/targets.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;'
          color-space='sRGB'
          embedded
          renderer='colorManagement: true, physicallyCorrectLights'
          vr-mode-ui='enabled: false'
          device-orientation-permission-ui='enabled: false'>
          <a-assets>
            {/* <img
                id='card'
                crossOrigin='anonymous'
                src='https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.png'
              /> */}
            <a-asset-item id='avatarModel' src='/glb/women.glb'></a-asset-item>
          </a-assets>

          <a-camera position='0 0 0' look-controls='enabled: false'></a-camera>

          <a-entity mindar-image-target='targetIndex: 0'>
            {/* <a-plane
                src='#card'
                position='0 0 0'
                height='0.552'
                width='1'
                rotation='0 0 0'></a-plane> */}
            <a-gltf-model
              rotation='0 0 0 '
              position='0 0 0.1'
              scale='0.005 0.005 0.005'
              src='#avatarModel'></a-gltf-model>
          </a-entity>
          <a-entity
            light='color: #fff; intensity: 2'
            position='0 0 2'
            type='directional'></a-entity>
        </a-scene>
      </div>
    </>
  );
};
