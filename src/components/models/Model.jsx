import { useGSAP } from "@gsap/react";
import "../../App.css";
import gsap from "gsap";
import { Suspense, useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls, View } from "@react-three/drei";
import { models, modelsAppleWatch, modelsMac, positionLists, rotationLists, sizes } from "../../contants/contants";
import yellowImg from "../../../public/images/yellow.jpg";
import whiteImg from "../../../public/images/white.jpg";
import { animateWithGsap, animationsTimeline } from "../../contants/animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelMacbookView from "./ModelMacbookView";
import ModelAppleWatchView from "./ModelAppleWatchView";
gsap.registerPlugin(ScrollTrigger);
const Model = () => {
  //
  const [intensity, setIntensity] = useState(Math.PI * 0.2);
  const [angle, setAngle] = useState(0.15);
  const [penumbra, setPenumbra] = useState(1);
  const [decay, setDecay] = useState(0);
  //
  const [size, setSize] = useState("small");
  const [sizeMac, setSizeMac] = useState("small");
  const [sizeAppleWatch, setSizeAppleWatch] = useState("small");
  const[setting,setSetting]=useState("OFF")
  const [ambientLight, setAmbientLight] = useState(10);
  const[directionalLight,setDirectionalLight]=useState(10);
  const [modelMac, setModelMac] = useState({
    title: "Macbook Pro M1 White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  });
  const [modelAppleWatch, setModelAppleWatch] = useState({
    title: "Apple Watch White",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  });
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8f8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });
  const [zoom, setZoom] = useState(false);
  const handleZoom = () => {
    setZoom(!zoom);
  };
  const [scale, setScale] = useState({ x: 15, y: 15, z: 15 });
  const [position,setPosition]=useState({
    x:1,y:1,z:1
  })
  const [isScale, setIsScale] = useState(false);
  const [isPosition, setIsPosition] = useState(false);
  const handleScaleChange = (axis, value) => {
    setScale((prev) => ({ ...prev, [axis]: value }));
  };

  const handlePositionChange = (axis, value)=>{
        setPosition((prev)=>({...prev,[axis]:value}))
  }

  const [autoRotation, setAutoRotation] = useState(false);
  const [autoPosition, setAutoPosition] = useState(false);
  const [rotationXYZ, setRotationXYZ] = useState([]);
  const [positionXYZ, setPositionXYZ] = useState([]);
  // camera control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1, delay: 0.5,  ease: "power2.out" ,  
      scrollTrigger: {
      trigger: "#section-model",
      start: "top 20%", // When the top of the section reaches 80% of the viewport height
      toggleActions: "restart reverse restart reverse",
    }, });

    gsap.to("#section-model",{
      y:0,
      opacity:1,
      delay:0.55,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#section-model",
        start: "top 30%",
        toggleActions: "restart reverse restart reverse",
      },
    })
    animateWithGsap("#Mac",{y:0,opacity:1})
  }, []);

  const timeLine = gsap.timeline();
  useEffect(() => {
    if (size === "small") {
      animationsTimeline(timeLine, large, largeRotation, "#view2", "#view1", {
        duration: 2,
        transform: "translateX(0)",
      });
    }
    if (size === "large") {
      animationsTimeline(timeLine, small, smallRotation, "#view1", "#view2", {
        duration: 2,
        transform: "translateX(-100%)",
      });
    }
    if (sizeMac === "small") {
      animationsTimeline(timeLine, large, largeRotation, "#view2Mac", "#view1Mac", {
        duration: 2,
        transform: "translateX(0)",
      });
    }
    if (sizeMac === "large") {
      animationsTimeline(timeLine, small, smallRotation, "#view1Mac", "#view2Mac", {
        duration: 2,
        transform: "translateX(-100%)",
      });
    }
  }, [size,sizeMac]);
  const handleSetRotation = (item) => {
    setRotationXYZ((prev) => {
      if (prev.includes(item)) {
        return prev.filter((axis) => axis !== item);
      }
      return [...prev, item];
    });
    setAutoRotation(true);
  };
  
  const handleSetPosition = (item) => {
    setPositionXYZ((prev) => {
      if (prev.includes(item)) {
        return prev.filter((axis) => axis !== item);
      }
      return [...prev, item];
    });
    setAutoPosition(true);
  };

  console.log("POSITIONCAMERA",position)

  return (
    <section id="section-model" className="sm:py-32 py-20 sm:px-10 px-5 opacity-0 translate-y-50 bg-black">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
        >
          Take a closer look
        </h1>
        <div id="IPhone" className="flex flex-col items-center mt-5 translate-y-20 ">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
            isPosition={isPosition}
            position={position}
                directionalLight={directionalLight}
                autoPosition={autoPosition}
                positionXYZ={positionXYZ}
              intensity={intensity}
              angle={angle}
              penumbra={penumbra}
              decay={decay}
              ambientLight={ambientLight}
              isScale={isScale}
              scale={scale}
              zoom={zoom}
              rotationXYZ={rotationXYZ}
              autoRotation={autoRotation}
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
            isPosition={isPosition}
            position={position}
                directionalLight={directionalLight}
                autoPosition={autoPosition}
                positionXYZ={positionXYZ}
              intensity={intensity}
              angle={angle}
              penumbra={penumbra}
              decay={decay}
              ambientLight={ambientLight}
              isScale={isScale}
              scale={scale}
              zoom={zoom}
              rotationXYZ={rotationXYZ}
              autoRotation={autoRotation}
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            { setting==="ON" && <div>
             <button className="absolute right-[50px] top-[300px] flex gap-2 flex-col">
              <div>Position</div>
              {positionLists.map((item) => {
                return (
                  <span
                    key={item}
                    className={`w-[30px] h-[30px] text-black flex items-center justify-center p-1 rounded-full bg-gray-300 ${
                        positionXYZ.includes(item)
                        ? "border-4 border-[#56aaa4]"
                        : ""
                    }`}
                    onClick={() => handleSetPosition(item)}
                  >
                    {item}
                  </span>
                );
              })}
            </button>
            <button className="absolute right-[150px] top-[300px] flex gap-2 flex-col">
              <div>Rotation</div>
              {rotationLists.map((item) => {
                return (
                  <span
                    key={item}
                    className={`w-[30px] h-[30px] text-black flex items-center justify-center p-1 rounded-full bg-gray-300 ${
                      rotationXYZ.includes(item)
                        ? "border-4 border-[#56aaa4]"
                        : ""
                    }`}
                    onClick={() => handleSetRotation(item)}
                  >
                    {item}
                  </span>
                );
              })}

              <div className="mt-5" onClick={handleZoom}>
                Zoom{" "}
                <div className="w-[50px] h-[30px]  rounded-full bg-gray-300 p-1  text-black ">
                  {zoom ? "True" : "False"}
                </div>
              </div>
            </button>
            <div className=" absolute mt-5 top-[300px]">
              Scale
              <div
                onClick={() => setIsScale(!isScale)}
                className={`${
                  isScale ? "border-2 border-[#0b73ff]" : ""
                } border-2 cursor-pointer flex items-center justify-center rounded-full bg-gray-300 text-black backdrop-blur`}
              >
                {isScale ? "True" : "False"}
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {["x", "y", "z"].map((axis) => (
                  <div key={axis} className="flex items-center gap-2">
                    <span>{axis.toUpperCase()}</span>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="0.5"
                      value={scale[axis]}
                      onChange={(e) =>
                        handleScaleChange(axis, parseFloat(e.target.value))
                      }
                    />
                    <span>{scale[axis]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[170px]">
                    Position Camera
                    <div
                onClick={() => setIsPosition(!isPosition)}
                className={`${
                    isPosition ? "border-2 border-[#0b73ff]" : ""
                } border-2 cursor-pointer flex items-center justify-center rounded-full bg-gray-300 text-black backdrop-blur`}
              >
                {isPosition ? "True" : "False"}
              </div>
                    <div className="flex flex-col gap-2 mt-2">
                {["x", "y", "z"].map((axis) => (
                  <div key={axis} className="flex items-center gap-2">
                    <span>{axis.toUpperCase()}</span>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="0.5"
                      value={position[axis]}
                      onChange={(e) =>
                        handlePositionChange(axis, parseFloat(e.target.value))
                      }
                    />
                    <span>{position[axis]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" absolute mt-5 top-[450px]">
              ambientLight
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="0.5"
                    value={ambientLight}
                    onChange={(e) =>
                      setAmbientLight(parseFloat(e.target.value))
                    }
                  />
                  <span>{ambientLight}</span>
                </div>
              </div>
            </div>
            <div className=" absolute mt-5 top-[500px]">
            directionalLight
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="0.5"
                    value={directionalLight}
                    onChange={(e) =>
                      setDirectionalLight(parseFloat(e.target.value))
                    }
                  />
                  <span>{directionalLight}</span>
                </div>
              </div>
            </div>                
            </div>}
            {/* <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: 20,
                background: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <div>
                <label>Intensity: {intensity}</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={intensity}
                  onChange={(e) => setIntensity(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label>Angle: {angle}</label>
                <input
                  type="range"
                  min="0"
                  max="Math.PI / 2"
                  step="0.01"
                  value={angle}
                  onChange={(e) => setAngle(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label>Penumbra: {penumbra}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={penumbra}
                  onChange={(e) => setPenumbra(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label>Decay: {decay}</label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={decay}
                  onChange={(e) => setDecay(parseFloat(e.target.value))}
                />
              </div>
            </div> */}
          </div>
          <div className="mx-auto w-full  absolute bottom-[50px] ">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div
              className="d-flex justify-center items-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur">
                {models.map((model, index) => {
                  return (
                    <li
                      key={index}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: model.color[0] }}
                      onClick={() => setModel(model)}
                    ></li>
                  );
                })}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => {
                  return (
                    <span
                      key={label}
                      className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                      style={{
                        backgroundColor:
                          size === value ? "white" : "transparent",
                        color: size === value ? "black" : "white",
                      }}
                      onClick={() => setSize(value)}
                    >
                      {label}
                    </span>
                  );
                })}
              </button>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
                {['OFF','ON'].map((item,i) => {
                  return (
                    <span
                      key={i}
                      className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                      style={{
                        backgroundColor:
                          setting === item ? "white" : "transparent",
                        color: setting === item ? "black" : "white",
                        transition:'all ease-in 0.5s'
                      }}
                      onClick={() => setSetting(item)}
                    >
                      {item}
                    </span>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
        <div id="Mac" className="flex flex-col items-center mt-5 translate-y-20 opacity-0 ">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelMacbookView
                isPosition={isPosition}
                position={position}
                directionalLight={directionalLight}
                autoPosition={autoPosition}
                positionXYZ={positionXYZ}
                intensity={intensity}
                angle={angle}
                penumbra={penumbra}
                decay={decay}
                ambientLight={ambientLight}
                isScale={isScale}
                scale={scale}
                zoom={zoom}
                rotationXYZ={rotationXYZ}
                autoRotation={autoRotation}
                index={1}
                groupRef={small}
                gsapType="view1Mac"
                controlRef={cameraControlSmall}
                setRotationState={setSmallRotation}
                item={modelMac}
                size={sizeMac}
            />
            <ModelMacbookView
                isPosition={isPosition}
                position={position}
                directionalLight={directionalLight}
                autoPosition={autoPosition}
                positionXYZ={positionXYZ}
                intensity={intensity}
                angle={angle}
                penumbra={penumbra}
                decay={decay}
                ambientLight={ambientLight}
                isScale={isScale}
                scale={scale}
                zoom={zoom}
                rotationXYZ={rotationXYZ}
                autoRotation={autoRotation}
                index={2}
                groupRef={large}
                gsapType="view2Mac"
                controlRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={modelMac}
                size={sizeMac}
            />
          </div>
          <div className="mx-auto w-full absolute bottom-[-40px] ">
            <p className="text-sm font-light text-center mb-5">{modelMac.title}</p>
            <div
              className="d-flex justify-center items-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur">
                {modelsMac.map((model, index) => {
                  return (
                    <li
                      key={index}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: model.color[0] }}
                      onClick={() => setModelMac(model)}
                    ></li>
                  );
                })}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => {
                  return (
                    <span
                      key={label}
                      className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                      style={{
                        backgroundColor:
                          sizeMac === value ? "white" : "transparent",
                        color: sizeMac === value ? "black" : "white",
                      }}
                      onClick={() => setSizeMac(value)}
                    >
                      {label}
                    </span>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
        <div id="Apple Watch" className="flex flex-col items-center mt-5 translate-y-20 ">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelAppleWatchView
                isPosition={isPosition}
                position={position}
                directionalLight={directionalLight}
                autoPosition={autoPosition}
                positionXYZ={positionXYZ}
                intensity={intensity}
                angle={angle}
                penumbra={penumbra}
                decay={decay}
                ambientLight={ambientLight}
                isScale={isScale}
                scale={scale}
                zoom={zoom}
                rotationXYZ={rotationXYZ}
                autoRotation={autoRotation}
                index={1}
                groupRef={small}
                gsapType="view1AppleWatch"
                controlRef={cameraControlSmall}
                setRotationState={setSmallRotation}
                item={modelAppleWatch}
                size={sizeAppleWatch}
            />
            <ModelAppleWatchView
                isPosition={isPosition}
                position={position}
                directionalLight={directionalLight}
                autoPosition={autoPosition}
                positionXYZ={positionXYZ}
                intensity={intensity}
                angle={angle}
                penumbra={penumbra}
                decay={decay}
                ambientLight={ambientLight}
                isScale={isScale}
                scale={scale}
                zoom={zoom}
                rotationXYZ={rotationXYZ}
                autoRotation={autoRotation}
                index={2}
                groupRef={large}
                gsapType="view2AppleWatch"
                controlRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={modelAppleWatch}
                size={sizeAppleWatch}
            />
          </div>
          <div className="mx-auto w-full absolute bottom-[10px]  " >
            <p className="text-sm font-light text-center mb-5">{modelAppleWatch.title}</p>
            <div
              className="d-flex justify-center items-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur">
                {modelsAppleWatch.map((model, index) => {
                  return (
                    <li
                      key={index}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: model.color[0] }}
                      onClick={() => setModelAppleWatch(model)}
                    ></li>
                  );
                })}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => {
                  return (
                    <span
                      key={label}
                      className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                      style={{
                        backgroundColor:
                          sizeAppleWatch === value ? "white" : "transparent",
                        color: sizeAppleWatch === value ? "black" : "white",
                      }}
                      onClick={() => setSizeAppleWatch(value)}
                    >
                      {label}
                    </span>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
