// eslint-disable-next-line no-unused-vars
import { a } from "@react-spring/three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export default function Island({ setCurrentStage, ...props }) {
  const islandRef = React.useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = React.useRef(null);
  const rotationSpeed = React.useRef(0);
  const dampingFactor = 0.95;
  const idleRotationSpeed = 0.00065 * Math.PI;

  // ----------------------
  // Pointer / Touch handlers
  // ----------------------
  const handlePointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    lastX.current = e.clientX || e.touches[0].clientX;
  };

  const handlePointerMove = React.useCallback(
    (e) => {
      if (lastX.current === null) return;

      e.preventDefault();
      e.stopPropagation();

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const delta = (clientX - lastX.current) / viewport.width;

      // Reduce sensitivity: multiply by 0.3 instead of 1
      rotationSpeed.current += delta * Math.PI * 0.003;
      lastX.current = clientX;
    },
    [viewport.width],
  );

  const handlePointerUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    lastX.current = null;
  };

  // ----------------------
  // Keyboard handlers
  // ----------------------
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      rotationSpeed.current += 0.003;
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      rotationSpeed.current -= 0.003;
    }
  };

  // ----------------------
  // Event listeners
  // ----------------------
  React.useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);

    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchmove", handlePointerMove);
    canvas.addEventListener("touchend", handlePointerUp);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);

      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchend", handlePointerUp);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gl, handlePointerMove]);

  // ----------------------
  // Frame updates
  // ----------------------
  useFrame(() => {
    const island = islandRef.current;

    // Apply rotation speed
    if (Math.abs(rotationSpeed.current) > 0.001) {
      rotationSpeed.current *= dampingFactor; // smooth damping
      island.rotation.y += rotationSpeed.current;
    } else {
      rotationSpeed.current = 0;
      island.rotation.y -= idleRotationSpeed; // idle rotation
    }

    // Update stage
    const rotation = island.rotation.y;
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  // ----------------------
  // Render meshes
  // ----------------------
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}
