import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ mousePosition }) {
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        mousePosition.y * Math.PI * 0.5,
        0.1
      );
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        mousePosition.x * Math.PI * 0.5,
        0.1
      );
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <MeshDistortMaterial
        color="#a855f7"
        emissive="#7c3aed"
        emissiveIntensity={0.8}
        metalness={0.8}
        roughness={0}
        wireframe
        distort={0.2}
      />
    </mesh>
  );
}

export function Hero3D() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  return (
    <div 
      className="h-[600px] w-full"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" />
        <spotLight 
          position={[-10, -10, -10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.5}
          color="#d8b4fe"
        />
        <FloatingCube mousePosition={mousePosition} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}