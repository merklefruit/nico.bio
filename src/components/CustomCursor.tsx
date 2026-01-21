"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const cursor = cursorRef.current;
		const ring = ringRef.current;
		if (!cursor || !ring) return;

		// Hide default cursor
		document.body.style.cursor = "none";

		let mouseX = 0;
		let mouseY = 0;
		let cursorX = 0;
		let cursorY = 0;
		let ringX = 0;
		let ringY = 0;

		const onMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			setIsVisible(true);
		};

		const onMouseLeave = () => {
			setIsVisible(false);
		};

		const animate = () => {
			// Cursor follows immediately
			cursorX += (mouseX - cursorX) * 0.2;
			cursorY += (mouseY - cursorY) * 0.2;
			cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

			// Ring follows with more lag for fluid effect
			ringX += (mouseX - ringX) * 0.08;
			ringY += (mouseY - ringY) * 0.08;
			ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

			requestAnimationFrame(animate);
		};

		window.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseleave", onMouseLeave);
		animate();

		return () => {
			document.body.style.cursor = "";
			window.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseleave", onMouseLeave);
		};
	}, []);

	return (
		<>
			{/* Inner dot */}
			<div
				ref={cursorRef}
				className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
				style={{ marginLeft: "-4px", marginTop: "-4px" }}
			>
				<div className="w-2 h-2 bg-white rounded-full" />
			</div>

			{/* Outer ring with pulse animation */}
			<div
				ref={ringRef}
				className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
				style={{ marginLeft: "-16px", marginTop: "-16px" }}
			>
				<div className="w-8 h-8 border border-white/40 rounded-full animate-pulse" />
			</div>
		</>
	);
}
