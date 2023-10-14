import Link from "next/link";
import { Fingerprint, Github, Mail, Twitter } from "lucide-react";

import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="About" icon={<Fingerprint />}>
      <div>
        <p className="text-monochromeCloud font-light">
          Hi! I&apos;m Nicolas, a software engineer based in Italy.
          <br />
          I&apos;m interested in distributed systems, blockchain and machine
          learning.
          <br />
          <br />
          I&apos;m working at{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://www.chainbound.io/"
            target="_blank"
          >
            Chainbound
          </a>{" "}
          on building latency-optimized infrastructure for Ethereum.
          <br />
          <br />
          In my free time, I love contributing to open-source initiatives,
          primarily in Rust. I&apos;m also always building{" "}
          <Link
            href="/projects"
            className="text-moonlightBlue hover:opacity-80"
          >
            side projects
          </Link>{" "}
          and occasionally{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://twitter.com/merklefruit"
            target="_blank"
          >
            shitposting
          </a>{" "}
          on Twitter.
          <br />
          <br />
          You can reach me at any of the following places:
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
            href="mailto:merkle-tree.eth@ethereum.email"
            target="_blank"
          >
            merkle-tree.eth@ethereum.email
          </a>
        </div>
      </div>
    </BaseLayout>
  );
}
