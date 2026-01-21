export default function GrainOverlay() {
	return (
		<>
			{/* SVG filter for noise */}
			<svg className="hidden">
				<filter id="grain">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"
					/>
					<feColorMatrix type="saturate" values="0" />
				</filter>
			</svg>

			{/* Grain overlay */}
			<div
				className="pointer-events-none fixed inset-0 z-40 opacity-[0.035]"
				style={{
					filter: "url(#grain)",
					mixBlendMode: "overlay",
				}}
			/>
		</>
	);
}
