import { Fingerprint, Github, Mail, Twitter } from "lucide-react";

import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="About" icon={<Fingerprint />}>
      <div>
        <p className="text-monochromeCloud font-light">
          I&apos;m Nicolas, a blockchain engineer and researcher focusing on the
          Ethereum ecosystem.
          <br />
          <br />
          I&apos;m working on latency-optimized infrastructure for MEV at{" "}
          <a
            className="hover:opacity-80 text-moonlightBlue decoration-dotted underline decoration-moonlightBlue underline-offset-1"
            href="https://www.chainbound.io/"
            target="_blank"
          >
            Chainbound
          </a>
          , and I love contributing to open-source projects to learn stuff.
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

        <div className="flex gap-3.5">
          <div className="flex gap-2">
            <Mail strokeWidth={1.5} size={19} className="mt-0.5" />
            <p>Email</p>
          </div>
          <div className="w-full border-b border-moonlightSoft mb-2.5" />
          <a
            className="hover:text-moonlightStone underline decoration-moonlightStone 
            underline-offset-1 min-w-max"
            href="mailto:merklefruit@proton.me"
            target="_blank"
          >
            merklefruit@proton.me
          </a>
        </div>
      </div>
    </BaseLayout>
  );
}
