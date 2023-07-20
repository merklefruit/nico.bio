import Link from "next/link";

import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="About">
      <div>
        <p className="text-monochromeCloud font-light">
          I&apos;m Nicolas, a Blockchain engineer & researcher focusing on the
          Ethereum ecosystem. I&apos;m also interested in a wide variety of
          topics including game theory, high-performance computing and machine
          learning.
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
          focusing on the development of{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://fiber.chainbound.io/"
            target="_blank"
          >
            Fiber
          </a>
          , a global high-performance Ethereum mempool streaming service.
          <br />
          <br />
          In my free time, I like to contribute to open-source projects related
          to the Ethereum ecosystem, mainly in Rust. I&apos;m also always
          building{" "}
          <Link
            href="/projects"
            className="text-moonlightBlue hover:opacity-80"
          >
            personal projects
          </Link>{" "}
          to learn new things and improve my skills.
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
