"use client";

import { Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Pointer() {
	const ref = useRef(null);
	const { viewport } = useThree();

	useFrame(({ pointer }) => {
		if (ref.current) {
			ref.current.setNextKinematicTranslation({
				x: (pointer.x * viewport.width) / 2,
				y: (pointer.y * viewport.height) / 2,
				z: 0,
			});
		}
	});

	return (
		<RigidBody ref={ref} type="kinematicPosition" colliders={false}>
			<CuboidCollider args={[0.4, 0.4, 10]} />
		</RigidBody>
	);
}

function Boundaries() {
	const { viewport } = useThree();
	const width = viewport.width / 2;
	const height = viewport.height / 2;
	const depth = 4;
	const thickness = 0.85;

	return (
		<>
			<RigidBody type="fixed" position={[-width - thickness, 0, 0]}>
				<CuboidCollider args={[thickness, height + 2, depth]} />
			</RigidBody>
			<RigidBody type="fixed" position={[width + thickness, 0, 0]}>
				<CuboidCollider args={[thickness, height + 2, depth]} />
			</RigidBody>
			<RigidBody type="fixed" position={[0, height + thickness, 0]}>
				<CuboidCollider args={[width + 2, thickness, depth]} />
			</RigidBody>
			<RigidBody type="fixed" position={[0, -height - thickness, 0]}>
				<CuboidCollider args={[width + 2, thickness, depth]} />
			</RigidBody>
			<RigidBody type="fixed" position={[0, 0, depth]}>
				<CuboidCollider args={[width + 2, height + 2, thickness]} />
			</RigidBody>
			<RigidBody type="fixed" position={[0, 0, -depth]}>
				<CuboidCollider args={[width + 2, height + 2, thickness]} />
			</RigidBody>
		</>
	);
}

// Custom Ethereum logo geometry - elongated diamond shape
function useEthereumGeometry() {
	return useMemo(() => {
		const geometry = new THREE.BufferGeometry();

		// Ethereum logo proportions - taller than wide, with a center band
		const top = 2.1;
		const middle = 0.15;
		const bottom = -1.35;
		const width = 1.05;
		const depth = 1.05;

		// Vertices: top point, 4 middle points, bottom point
		const vertices = new Float32Array([
			// Top pyramid
			0, top, 0,           // 0: top
			-width, middle, 0,   // 1: left
			0, middle, -depth,   // 2: back
			width, middle, 0,    // 3: right
			0, middle, depth,    // 4: front

			// Bottom pyramid
			0, bottom, 0,        // 5: bottom
		]);

		// Faces (triangles)
		const indices = [
			// Top pyramid
			0, 1, 2,
			0, 2, 3,
			0, 3, 4,
			0, 4, 1,
			// Bottom pyramid
			5, 2, 1,
			5, 3, 2,
			5, 4, 3,
			5, 1, 4,
		];

		geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
		geometry.setIndex(indices);
		geometry.computeVertexNormals();

		return geometry;
	}, []);
}

function EthereumLogo() {
	const ref = useRef(null);
	const geometry = useEthereumGeometry();

	useFrame(() => {
		if (ref.current) {
			const angVel = ref.current.angvel();
			const angSpeed = Math.sqrt(angVel.x ** 2 + angVel.y ** 2 + angVel.z ** 2);

			if (angSpeed < 0.3) {
				ref.current.setAngvel({ x: 0.1, y: 0.25, z: 0.05 }, true);
			}
		}
	});

	return (
		<RigidBody
			ref={ref}
			colliders="hull"
			restitution={0.7}
			friction={0.25}
			linearDamping={1.5}
			angularDamping={0.8}
		>
			<mesh geometry={geometry}>
				<meshPhysicalMaterial
					color="#ffffff"
					metalness={1}
					roughness={0.25}
					envMapIntensity={2}
					clearcoat={0.3}
					clearcoatRoughness={0.15}
				/>
			</mesh>
		</RigidBody>
	);
}

function Scene() {
	return (
		<Physics gravity={[0, 0, 0]}>
			<Pointer />
			<Boundaries />
			<EthereumLogo />
		</Physics>
	);
}

export default function Logo3D({ className = "" }) {
	return (
		<div className={className}>
			<Canvas
				camera={{ position: [0, 0, 10], fov: 50 }}
				style={{ background: "transparent" }}
				dpr={[1, 2]}
				gl={{ antialias: true }}
			>
				<ambientLight intensity={0.3} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<directionalLight
					position={[-3, -3, 5]}
					intensity={0.5}
					color="#e8f0ff"
				/>
				<Environment preset="studio" />
				<Scene />
			</Canvas>
		</div>
	);
}
