import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";

// https://market.pmnd.rs/model/iphone-x

function App() {
  // const model = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  // );

  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <div>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [0, 1.5, 6],
        }}
      >
        <Environment preset="sunset" />
        <color args={["#185090"]} attach="background" />
        <PresentationControls
          global
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          rotation={[-0.05, 0, 0]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={1.6}>
            <rectAreaLight
              width={2.0}
              height={1.65}
              intensity={65}
              color={"#263c95"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />

            <primitive
              object={computer.scene}
              position-y={-1.1}
              position-x={-1.5}
              position={[-1, -1.3, 0.2]}
            >
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://shincode-inc-hp.vercel.app/" />
              </Html>
            </primitive>
          </Float>
          <Text
            // font="./bangers-v20-latin-regular.woff"
            fontSize={0.59}
            position={[1.5, 0.725, 0.75]}
            rotation-y={-0.6}
            // maxWidth={3}
            textAlign="center"
          >
            MacBook
          </Text>
          <Text
            fontSize={0.22}
            position={[1.5, 0.3, 0.75]}
            rotation-y={-0.6}
            // maxWidth={3}
            textAlign="center"
          >
            The new generatios.
          </Text>
        </PresentationControls>
        <ContactShadows position-y={-2.0} opacity={0.7} scale={7} blur={2.4} />
      </Canvas>
      {/* <div
        style={{
          position: "absolute",
          top: "35%",
          right: "20%",
          color: "#fff",
          textShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        洗練されたデバイス
        <p>
          さらに洗練されたモデルが新発売。
          <br />
          軽量化とシンプルなデザインでユーザーから指示を得るデバイス。
        </p>
      </div> */}
    </div>
  );
}

export default App;
