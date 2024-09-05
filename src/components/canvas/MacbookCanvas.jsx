import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
const MacbookCanvas=(props)=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/mac.glb')
  const { actions } = useAnimations(animations, group)
  
  const modelRef =useRef();
  const mixerRef = useRef();
  const [firstAnimation]=animations
  console.log("actions",firstAnimation)
  useEffect(()=>{
    Object.entries(materials).map((matertial)=>{
      console.log("matertial",matertial)
      if(matertial[0]!=='zFdeDaGNRwzccye' && matertial[0]!=='ujsvqBWRMnqdwPx'  &&matertial[0]!=='hUlRcbieVuIiOXG'  &&matertial[0]!=='jlzuBkUzuJqgiAK'  &&matertial[0]!=='xNrofRCqOXXHVZt' ){
        matertial[1].color=new THREE.Color(props.item?.color[0])

      }
      matertial[1].needsUpdate=true
    })
  },[materials,props.item])
  useFrame((state,delta)=>{
    if(props.autoRotation){
      if(props.rotationXYZ.includes('X')){
        modelRef.current.rotation.x+=delta
      }
      if(props.rotationXYZ.includes('Y')){
        modelRef.current.rotation.y+=delta
      }
      if(props.rotationXYZ.includes('Z')){
        modelRef.current.rotation.z+=delta
      }
    }
    if(props.autoPosition){
      if(props.positionXYZ.includes('X')){
        modelRef.current.position.x=Math.sin(state.clock.elapsedTime) * 2;
      }
      if(props.positionXYZ.includes('Y')){
        modelRef.current.position.y=Math.sin(state.clock.elapsedTime) * 2;
      }
      if(props.positionXYZ.includes('Z')){
        modelRef.current.position.z=Math.sin(state.clock.elapsedTime) * 2;
      }
    }
  })
  return (
    <group ref={modelRef} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Bevels_2" position={[0, 0.008, -0.104]} scale={0.275}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials['Material.002']}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials['Space_Grey.001']}
                />
                <group
                  name="Empty_1"
                  position={[0, 0.001, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.039, 0.039, 0.039]}>
                  <group
                    name="Camera_Light_0"
                    position={[0, 0.077, -0.044]}
                    rotation={[-1.192, 0, 0]}
                    scale={[-25.381, 25.381, 25.381]}>
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.Camera_Light}
                    />
                  </group>
                </group>
              </group>
              <group name="Caps_Lock_Light_3" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Caps_Lock_Light}
                />
              </group>
              <group
                name="Macbook_Pro_4"
                position={[0, 0.008, -0.104]}
                rotation={[1.949, 0, 0]}
                scale={0.275}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Main_Body_5" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials['Keys.001']}
                />
              </group>
              <group name="Touch_Bar_6" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Keys}
                />
              </group>
              <group name="Touch_Bar_Shot_7" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials['Touch_Bar_Shot_2021-04-02_at_18.13.28']}
                />
              </group>
              <group name="Keyboard_8" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Keys}
                />
              </group>
              <group name="Cube_9" position={[0, -0.014, 0]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="Circle001_12"
                position={[0.203, 0.008, -0.104]}
                rotation={[0.011, -0.75, 1.274]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default MacbookCanvas
useGLTF.preload('/models/mac.glb')