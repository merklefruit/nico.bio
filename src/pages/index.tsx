import { Fingerprint, Github, Mail, Twitter } from "lucide-react";

import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="About" icon={<Fingerprint />}>
      <div>
        <p className="text-monochromeCloud font-light">
          Hi! I&apos;m Nicolas, an engineer and blockchain enthusiast.
          <br /> Reach out on X if you want to chat 🌱
        </p>
      </div>

      <div className="pt-10 w-full flex flex-col gap-3 font-light opacity-80">
        <div className="flex gap-3.5">
          <div className="flex gap-2">
            <Github strokeWidth={1.5} size={20} className="mt-0.5" />
            <p>Github</p>
          </div>
          <div className="w-full border-b border-moonlightSoft mb-2.5" />
          <a
            className="hover:text-moonlightStone underline decoration-moonlightStone underline-offset-1"
            href="https://github.com/merklefruit"
            target="_blank"
          >
            @merklefruit
          </a>
        </div>

        <div className="flex gap-3.5">
          <div className="flex gap-2">
            <Twitter strokeWidth={1.5} size={20} className="mt-0.5" />
            <p>Twitter</p>
          </div>
          <div className="w-full border-b border-moonlightSoft mb-2.5" />
          <a
            className="hover:text-moonlightStone underline decoration-moonlightStone underline-offset-1"
            href="https://twitter.com/merklefruit"
            target="_blank"
          >
            @merklefruit
          </a>
        </div>
      </div>
    </BaseLayout>
  );
}
