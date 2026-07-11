'use client';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Preload, Environment } from '@react-three/drei';
import * as THREE from 'three';

const COMPUTER_URL   = '/cdn-proxy/3D_models/Vintage_Computer.glb';
const GAMEBOY_URL    = '/cdn-proxy/3D_models/White_Nintendo_Game_Boy.glb';
const CONTROLLER_URL = '/cdn-proxy/3D_models/White_Xbox_Controller_texture.glb';

// final [x, y, z]  |  entry offset [dx, dy, dz]
const MODEL_DEFS = [
  // Computer — left side, flies in from the left
  { url: COMPUTER_URL,   scale: 1.5,  final: [-3.6,  0.4, 0] as [number,number,number], entry: [-8,  0,   0] as [number,number,number], rotY: THREE.MathUtils.degToRad(35) },
  // Gameboy  — right side, flies in from the right
  { url: GAMEBOY_URL,    scale: 1.05, final: [ 3.5,  0.4, 0] as [number,number,number], entry: [ 8,  0,   0] as [number,number,number], rotY: THREE.MathUtils.degToRad(-35) },
  // Controller — bottom centre, flies in from below
  { url: CONTROLLER_URL, scale: 1.05, final: [ 0,   -1.8, 0] as [number,number,number], entry: [  0, -12,  0] as [number,number,number], rotY: 0 },
];

function Model({
  url, scale, final, entry, visible, rotY = 0,
}: {
  url: string;
  scale: number;
  final: [number, number, number];
  entry: [number, number, number];
  visible: boolean;
  rotY?: number;
}) {
  const { scene } = useGLTF(url);
  const group = useRef<THREE.Group>(null);
  const pos   = useRef<[number, number, number]>([
    final[0] + entry[0],
    final[1] + entry[1],
    final[2] + entry[2],
  ]);
  const currentRot = useRef(0);
  const t = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (!group.current) return;
    t.current += delta;

    const targetX = visible ? final[0] : final[0] + entry[0];
    const targetY = visible ? final[1] : final[1] + entry[1];
    const targetZ = visible ? final[2] : final[2] + entry[2];

    const speed = Math.min(delta * 3.5, 1);
    pos.current[0] = THREE.MathUtils.lerp(pos.current[0], targetX, speed);
    pos.current[1] = THREE.MathUtils.lerp(pos.current[1], targetY, speed);
    pos.current[2] = THREE.MathUtils.lerp(pos.current[2], targetZ, speed);

    group.current.position.set(
      pos.current[0],
      pos.current[1] + (visible ? Math.sin(t.current * 0.6) * 0.1 : 0),
      pos.current[2],
    );

    currentRot.current = THREE.MathUtils.lerp(currentRot.current, rotY, Math.min(delta * 5, 1));
    group.current.rotation.y = currentRot.current;
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

function Scene({ visible }: { visible: boolean }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 7, 4]}  intensity={2.5} castShadow />
      <directionalLight position={[-4, 2, -4]} intensity={0.8} />
      <pointLight position={[0, 3, 3]} intensity={1.1} color="#ffddaa" />
      <Environment preset="city" />
      <Suspense fallback={null}>
        {MODEL_DEFS.map((m) => (
          <Model
            key={m.url}
            url={m.url}
            scale={m.scale}
            final={m.final}
            entry={m.entry}
            visible={visible}
            rotY={m.rotY}
          />
        ))}
      </Suspense>
    </>
  );
}

export default function AboutCanvas({ visible }: { visible: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 52 }}
      gl={{ antialias: true, alpha: true }}
      frameloop="always"
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
    >
      <Preload all />
      <Scene visible={visible} />
    </Canvas>
  );
}

useGLTF.preload(COMPUTER_URL);
useGLTF.preload(GAMEBOY_URL);
useGLTF.preload(CONTROLLER_URL);
