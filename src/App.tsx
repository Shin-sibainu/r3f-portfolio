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
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  // const model1 = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide-broken/model.gltf"
  // );

  const react = useGLTF("./react.gltf");
  const coffee = useGLTF("./coffee.gltf");
  const coffee2 = useGLTF("./coffee2.gltf");
  const donut = useGLTF("./donut.gltf");

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
        {/* <Environment preset="sunset" /> */}
        <directionalLight position={[2.5, 8, 5]} intensity={1.7} />
        <color args={["#155196"]} attach="background" />

        <PresentationControls
          global
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          rotation={[-0.05, 0, 0]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={1.5}>
            <rectAreaLight
              width={2.0}
              height={1.65}
              intensity={75}
              color={"#0021a7"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 0, -1]}
            />

            <primitive
              object={computer.scene}
              position-y={-1.5}
              position-x={0}
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
          <Float rotationIntensity={1.5}>
            <primitive
              object={coffee2.scene}
              position-y={-0.7}
              position-x={-2.4}
              rotation-x={0.4}
              position={[-1, -1.3, 0.2]}
              scale={[2, 2, 2]}
            ></primitive>
          </Float>
          <Float rotationIntensity={1.5}>
            <primitive
              object={donut.scene}
              position-y={-0.7}
              position-x={2.4}
              rotation-x={0.4}
              position={[-1, -1.3, 0.2]}
              scale={[3, 3, 3]}
            ></primitive>
          </Float>
          <Text
            font="/RobotoSlab-Bold.ttf"
            fontSize={0.59}
            position={[0, 1.725, 0.75]}
            // maxWidth={3}
            textAlign="center"
          >
            React-Three-Fiber
          </Text>
        </PresentationControls>

        <ContactShadows position-y={-2.0} opacity={0.7} scale={7} blur={2.4} />
      </Canvas>
    </div>
  );
}

export default App;
