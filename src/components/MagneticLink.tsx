"use client";

import { useRef, useState } from "react";

interface MagneticLinkProps {
	children: React.ReactNode;
	href: string;
	className?: string;
	ariaLabel?: string;
	external?: boolean;
}

export default function MagneticLink({
	children,
	href,
	className = "",
	ariaLabel,
	external = false,
}: MagneticLinkProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const distanceX = e.clientX - centerX;
		const distanceY = e.clientY - centerY;

		// Magnetic pull strength
		const strength = 0.4;

		setPosition({
			x: distanceX * strength,
			y: distanceY * strength,
		});
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	return (
		<a
			ref={ref}
			href={href}
			className={className}
			aria-label={ariaLabel}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
				transition: position.x === 0 ? "transform 0.3s ease-out" : "none",
			}}
		>
			{children}
		</a>
	);
}
