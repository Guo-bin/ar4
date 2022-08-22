import React, { useRef } from "react";

function Arjs({ nftUrl, model }) {
  const assetRef = useRef(null);

  return (
    <a-scene
      vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
    >
      <a-assets>
          <a-asset-item
              id="animated-asset"
              src={model}
              ref={assetRef}
          ></a-asset-item>
      </a-assets>
      <a-nft
        type="nft"
        url={nftUrl}
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5"
      >
        <a-entity
          gltf-model={assetRef && assetRef.current}
          scale="1 1 1"
          position="0 10 0"
        >
        </a-entity>
      </a-nft>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default Arjs;
