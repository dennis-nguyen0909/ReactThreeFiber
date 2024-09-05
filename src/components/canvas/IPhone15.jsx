import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const IPhone = () => {
  const { scene } = useGLTF("/models/ip15/scene.gltf");
  console.log("scene", scene);
  return (
    <mesh>
      <primitive object={scene} scale={10} position={[0, -3.25, -1.5]} />
    </mesh>
  );
};

const Loader = () => {
  return (
    <Html>
      <div>Loading...</div>
    </Html>
  );
};

const IPhone15Promax = () => {
  return (
    <Canvas camera={{ position: [4, 4, 1.5], fov: 60 }}>
      <Suspense fallback={<Loader />}>
        <IPhone />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default IPhone15Promax;
