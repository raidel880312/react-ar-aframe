import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >

        <a-nft
            markerhandler
            type="nft"
            url="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/wclaro/arjs-gestures/master/images/cutcsa"
        >
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
