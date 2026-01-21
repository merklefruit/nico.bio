export default function Vignette() {
	return (
		<div
			className="pointer-events-none fixed inset-0 z-30"
			style={{
				background:
					"radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
			}}
		/>
	);
}
