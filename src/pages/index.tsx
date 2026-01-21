import GrainOverlay from "@/components/GrainOverlay";
import MagneticLink from "@/components/MagneticLink";
import Vignette from "@/components/Vignette";
import { Github, Mail, Twitter } from "lucide-react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Logo3D = dynamic(() => import("@/components/Logo3D"), {
	ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="h-screen w-screen relative overflow-hidden">
			<Head>
				<title>nico.bio</title>
			</Head>

			<CustomCursor />
			<GrainOverlay />
			<Vignette />

			{/* Full screen 3D canvas */}
			<Logo3D className="absolute inset-0 w-full h-full" />

			{/* Bottom left info */}
			<div className="absolute bottom-10 left-8 max-w-md flex flex-col gap-4 z-10">
				<div className="flex flex-col gap-1">
					<h1
						className="text-2xl text-monochromeCloud font-medium opacity-0 animate-fade-up"
						style={{ animationDelay: "0.2s" }}
					>
						Nicolas
					</h1>
					<p
						className="text-sm text-moonlightStone uppercase tracking-widest opacity-0 animate-fade-up"
						style={{ animationDelay: "0.4s" }}
					>
						Blockchain Engineer
					</p>
				</div>
				<p
					className="text-sm text-moonlightSlight leading-relaxed opacity-0 animate-fade-up"
					style={{ animationDelay: "0.6s" }}
				>
					Building blockchain infrastructure, focused on the Ethereum ecosystem.
					Open-source software & Rust enthusiast.
				</p>
			</div>

			{/* Bottom right links */}
			<div
				className="absolute bottom-10 right-8 flex items-center gap-5 z-10 opacity-0 animate-fade-up"
				style={{ animationDelay: "0.8s" }}
			>
				<MagneticLink
					href="https://github.com/merklefruit"
					external
					className="text-moonlightStone hover:text-monochromeCloud transition-colors"
					ariaLabel="GitHub"
				>
					<Github size={20} strokeWidth={1.5} />
				</MagneticLink>
				<MagneticLink
					href="https://x.com/merklefruit"
					external
					className="text-moonlightStone hover:text-monochromeCloud transition-colors"
					ariaLabel="X"
				>
					<Twitter size={20} strokeWidth={1.5} />
				</MagneticLink>
				<MagneticLink
					href="mailto:merklefruit@proton.me"
					className="text-moonlightStone hover:text-monochromeCloud transition-colors"
					ariaLabel="Email"
				>
					<Mail size={20} strokeWidth={1.5} />
				</MagneticLink>
			</div>
		</div>
	);
}
