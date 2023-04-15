import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto pt-24">
      <div className="flex items-center justify-start">
        <h2 className="text-2xl font-medium">About</h2>
      </div>

      <div className="pt-2 flex gap-3 items-center justify-end w-full">
        <Link
          href="/writings"
          className={`hover:text-moonlightStone underline 
          underline-offset-2 decoration-dotted decoration-moonlightStone ${
            router.pathname.includes("/writings")
              ? "text-moonlightStone cursor-default no-underline"
              : ""
          } `}
        >
          Writings
        </Link>
        <Link
          href="/"
          className={`hover:text-moonlightStone underline 
          underline-offset-2 decoration-dotted decoration-moonlightStone ${
            router.pathname === "/"
              ? "text-moonlightStone cursor-default no-underline"
              : ""
          } `}
        >
          About
        </Link>
      </div>

      <div className="pt-10 w-full">
        <p className="text-monochromeCloud font-light">
          I'm Nicolas, an Automation engineer living in Milan, Italy. I'm
          strongly passioned about Ethereum, the EVM and decentralized
          applications. I'm also interested in a wide variety of topics,
          including open source, web development, high-performance computing,
          machine learning and MEV.
          <br />
          <br />
          I'm currently working at{" "}
          <a
            className="text-moonlightBlue"
            href="https://fiveelementslabs.com"
            target="_blank"
          >
            FiveElementsLabs
          </a>{" "}
          focusing on the development of{" "}
          <a
            className="text-moonlightBlue"
            href="https://tideprotocol.xyz"
            target="_blank"
          >
            Tide Protocol
          </a>
          , a tool for DeFi projects to launch, manage and track their marketing
          strategies on-chain.
          <br />
          <br />
          Recently I've been learning Rust to contribute to the open-source
          Ethereum tooling community, as well as to build my own side-projects.
          <br />
          <br />
          If you want to know more about me, check out my writings or my social
          media accounts.
        </p>
      </div>

      <hr className="mt-10 border-moonlightSoft" />

      <div className="pt-10 w-full flex gap-1.5 font-light">
        <a
          className="hover:text-moonlightStone underline decoration-moonlightStone underline-offset-1"
          href="https://github.com/merklefruit"
          target="_blank"
        >
          Github
        </a>
        •
        <a
          className="hover:text-moonlightStone underline decoration-moonlightStone underline-offset-1"
          href="https://twitter.com/conyeth"
          target="_blank"
        >
          Twitter
        </a>
        •
        <a
          className="hover:text-moonlightStone underline decoration-moonlightStone underline-offset-1"
          href="mailto:merkle-tree.eth@ethereum.email"
          target="_blank"
        >
          Email
        </a>
      </div>
    </div>
  );
}
