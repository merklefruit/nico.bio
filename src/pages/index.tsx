import Link from "next/link";

import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="About">
      <div>
        <p className="text-monochromeCloud font-light">
          Hi! I&apos;m Nicolas, a software engineer based in Italy. My passions
          lie in the fields of blockchain, high-performance computing and
          machine learning.
          <br />
          <br />
          I&apos;m currently working at{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://www.chainbound.io/"
            target="_blank"
          >
            Chainbound
          </a>{" "}
          on building{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://fiber.chainbound.io/"
            target="_blank"
          >
            Fiber
          </a>{" "}
          – a global, speed-optimized Ethereum mempool streaming service.
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
          <p>Github</p>
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
          <p>Twitter</p>
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
          <p>Email</p>
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
