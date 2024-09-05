import { Html, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, View } from "@react-three/drei";
import Lights from "../Lights";
import { Suspense, useEffect } from "react";
import IPhoneCanvas from '../canvas/IPhoneCanvas'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Loader from "../Loader";
import MacbookCanvas from "../canvas/MacbookCanvas";

const ModelView = ({
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
  typeModel

}) => {
const defaultScale = index === 1 ? [15, 15, 15] : [19, 19, 19];
const scaleChange = [scale.x,scale.y,scale.z]
const positionChange = [position.x,position.y,position.z];

const CustomCameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Thay đổi các thuộc tính của camera
    camera.position.set(10, 5, 10);
    // camera.lookAt(0, 100, 100);
  }, [camera]);

  return null;
};
  return (
    <>
    <div key={index}  id={gsapType} className={`w-full h-full absolute ${index===2 ? 'right-[-100%]' :''}`}>
      <Canvas className="w-full h-full" fallback={null}>
            {/* <CustomCameraSetup /> */}
            <ambientLight intensity={ambientLight} position={isPosition && positionChange} />
            <PerspectiveCamera position={[0,0,4]} makeDefault />
            <Lights intensity={intensity} angle={angle} penumbra={penumbra} decay={decay} />
            <directionalLight intensity={directionalLight} position={isPosition && positionChange} />
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
                    <IPhoneCanvas
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

export default ModelView;
