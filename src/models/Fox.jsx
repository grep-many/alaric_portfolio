/**
 * IMPORTANT: This version lets the parent control the animation
 * using a ref → foxRef.current.setAnimation("walk")
 * instead of React state.
 */

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // ✅ ADDED for frame-based animation updates

import scene from "../assets/3d/fox.glb";

const Fox = forwardRef(({ ...props }, externalRef) => {
  const group = useRef();

  // These stay the same
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  /**
   * ❗ NEW:
   * This ref stores the *current animation name*.
   * Changes to this ref DO NOT re-render the component.
   */
  const animationRef = useRef("idle");

  /**
   * ❗ NEW:
   * Expose public methods (like setAnimation) to the parent component.
   * The parent can now do: foxRef.current.setAnimation("walk")
   */
  useImperativeHandle(externalRef, () => ({
    animation: animationRef.current,
    setAnimation: (animName) => {
      animationRef.current = animName;
    },
  }));

  /**
   * ❗ NEW:
   * Runs on EVERY FRAME (~60 times per second).
   * This ensures animation switching is smooth and does NOT cause re-renders.
   */
  const previousAnimRef = useRef(null);

  useFrame(() => {
    const anim = animationRef.current;
    if (!actions || previousAnimRef.current === anim) return;
    if (previousAnimRef.current && actions[previousAnimRef.current]) {
      actions[previousAnimRef.current].stop();
    }
    if (actions[anim]) {
      actions[anim].reset().fadeIn(0.2).play();
    }
    previousAnimRef.current = anim;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Model stays exactly the same */}
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />

        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
});

useGLTF.preload(scene);

export default Fox;
