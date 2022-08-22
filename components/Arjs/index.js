import React, { useRef } from "react";

function Arjs({ nftUrl, model }) {
  const assetRef = useRef(null);

  return (
    <a-scene
      vr-mode-ui='enabled: false;'
      renderer='logarithmicDepthBuffer: true;'
      // embedded
      arjs='trackingMethod: best; sourceType: webcam;debugUIEnabled: false;'>
      {/* <a-assets>
        <a-asset-item
          id='animated-asset'
          src={model}
          ref={assetRef}></a-asset-item>
      </a-assets> */}
      <a-box
        position='0 1.5 -3'
        color='#ff0000'
        material='opacity:0.5'
        scale='0.5 0.5 0.5'
        animation='property:rotation; from:0 0 0; to:0 360 0; dur:2000; loop:true; dir: alternate;'></a-box>
      <a-nft
        type='nft'
        url={nftUrl}
        smooth='true'
        smoothCount='10'
        smoothTolerance='.01'
        smoothThreshold='5'>
        <a-entity
          gltf-model={model}
          scale='1 1 1'
          position='0 0 0'
          rotation='-90 0 0 '
          animation-mixer='loop: repeat'></a-entity>
      </a-nft>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default Arjs;
