'use client';
import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Preload } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_URL =
  'https://cdn.animhaus.com/White_Xbox_Controller_texture.glb';

function CameraFov() {
  const { camera, size } = useThree();
  useEffect(() => {
    const isMobile = size.width < 768;
    (camera as THREE.PerspectiveCamera).fov = isMobile ? 90 : 75;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [camera, size.width]);
  return null;
}

function Controller() {
  const { scene } = useGLTF(MODEL_URL);
  const ref = useRef<THREE.Group>(null);
  const clock = useRef(0);
  // Scroll progress: 0 → 1 over the height of the viewport
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      // Normalise: 1 full viewport height = full 90° rotation
      scrollY.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    clock.current += delta;

    // Float: gentle sine on Y position
    ref.current.position.y = 0.05 + Math.sin(clock.current * 0.8) * 0.12;

    // Scroll-driven Y rotation: lerp toward target for smoothness
    const baseY = THREE.MathUtils.degToRad(-10);
    const targetY = baseY + THREE.MathUtils.degToRad(90) * Math.min(scrollY.current, 1);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.08);
  });

  // 15 degree tilt; Y rotation driven by scroll above
  return (
    <group
      ref={ref}
      rotation={[THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(-15)]}
    >
      <primitive object={scene} scale={2.2} position={[0, 0, 0]} />
    </group>
  );
}

export default function ControllerCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={2} castShadow />
      <directionalLight position={[-4, 2, -4]} intensity={0.6} />
      <CameraFov />
      <Preload all />
      <Suspense fallback={null}>
        <Controller />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL);
