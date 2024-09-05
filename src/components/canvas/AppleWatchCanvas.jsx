import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
const AppleWatchCanvas=(props)=> {
  const { nodes, materials } = useGLTF('/models/app2.glb')
  const ref = useRef()
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
    ref.current.rotation.y+=delta
  })
  return (
    <group ref={ref} {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0.022}>
      <group position={[0, 3.027, 0]} scale={[1, 0.765, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.body_material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.button_hole}
        />
        <group
          position={[1.337, 0.024, -0.584]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.248, 0.131, 0.324]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.body_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.button_hole}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.button_hole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.button_hole}
          position={[0, -0.514, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
          scale={[1, 1, 0.132]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.body_material}
          position={[0, -0.471, 0]}
          scale={[1, 1.308, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.emission}
          position={[0, -0.452, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1.308]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.button_hole}
          position={[0, -0.515, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
          scale={[1, 1, 0.132]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.button_hole}
          position={[0, -0.514, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
          scale={[1, 1, 0.132]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.button_hole}
          position={[0, -0.516, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
          scale={[1, 1, 0.132]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Material}
          position={[-0.004, -4.463, 0.584]}
          rotation={[-0.267, 0, 0]}
          scale={[0.385, 0.072, 0.394]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.body_material}
          position={[1.297, 0.003, 0.472]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.945, 0.945, 1.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.Elastic_Rubber}
          position={[0.025, -0.086, 2.372]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.931, 1.308, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.body_material}
          position={[-1.3, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.549, 1.076, 1.291]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Elastic_Rubber}
          position={[0.025, -0.077, -2.364]}
          scale={[0.931, 1.308, 1]}
        />
      </group>
    </group>
  </group>
  )
}

export default AppleWatchCanvas

useGLTF.preload('/models/app2.glb')