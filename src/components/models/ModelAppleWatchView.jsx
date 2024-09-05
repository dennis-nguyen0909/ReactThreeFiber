import { Html, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, View } from "@react-three/drei";
import Lights from "../Lights";
import { Suspense } from "react";
import IPhoneCanvas from '../canvas/IPhoneCanvas'
import * as THREE from 'three'
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "../Loader";
import MacbookCanvas from "../canvas/MacbookCanvas";
import AppleWatchCanvas from "../canvas/AppleWatchCanvas";

const ModelAppleWatchView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
  autoRotation,
  rotationXYZ,
  zoom,
  scale,
  isScale,
  ambientLight,
  intensity,
  angle,
  penumbra,
  decay,
  autoPosition,
  positionXYZ,
  directionalLight,
  isPosition,
  position,
  typeModel,

}) => {
const defaultScale = index === 1 ? [8, 8, 8] : [10, 10, 10];
const scaleChange = [scale.x,scale.y,scale.z]
const positionChange = [position.x,position.y,position.z];
console.log("item",item)
  return (
    <>
    <div key={index}  id={gsapType} className={`w-full h-full absolute ${index===2 ? 'right-[-100%]' :''}`}>
      <Canvas className="w-full h-full" fallback={null}>
            {/* <ambientLight intensity={ambientLight} position={isPosition && positionChange} /> */}
            <PerspectiveCamera position={[0,0,4]} makeDefault />
            <Lights intensity={intensity} angle={angle} penumbra={penumbra} decay={decay} />
            {/* <ambientLight  intensity={1}/> */}
            {/* <directionalLight intensity={directionalLight} position={isPosition && positionChange} /> */}
            <OrbitControls
                  makeDefault
                  ref={controlRef}
                  enableZoom={zoom}
                  enablePan={false}
                  rotateSpeed={0.4}
                  target={new THREE.Vector3(0,0,0)}
                  onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
                  />
            <group ref={groupRef} name={index===1 ? 'small':'large'} position={[0,0,0]}>
                <Suspense fallback={<Loader />}>
                    <AppleWatchCanvas
                    positionXYZ={positionXYZ}
                    autoPosition={autoPosition}
                    rotationXYZ={rotationXYZ}
                    autoRotation={autoRotation}
                    item={item}
                    size={size}
                    scale={isScale ? scaleChange : defaultScale} />
                </Suspense>
            </group>
      </Canvas>
    </div>
    </>
  );
};

export default ModelAppleWatchView;
