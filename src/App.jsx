import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./style.css";
import * as THREE from "three";
import Scene from "./Scene";
import Info from "./Info";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
        <div className="text-white font-bold text-6xl py-10 text-center tracking-wide text-white">Abdullah's Portfolio</div>
        <Info />
      <Canvas className=""flat camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
      </Canvas>
     




    </>
  );
};

export default App;
