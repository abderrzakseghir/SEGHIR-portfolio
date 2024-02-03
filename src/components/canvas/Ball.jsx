import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <group>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <Decal position={[0, 0, 1]} scale={[2, 2, 1]} map={decal} flatShading />
      </mesh>
    </group>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
