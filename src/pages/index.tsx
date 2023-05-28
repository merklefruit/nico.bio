import BaseLayout from "@/components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="About">
      <div>
        <p className="text-monochromeCloud font-light">
          I&apos;m Nicolas, an Automation engineer living in Milan, Italy.
          I&apos;m strongly passioned about Ethereum, the EVM and decentralized
          applications. I&apos;m also interested in a wide variety of topics,
          including open source, web development, high-performance computing,
          machine learning and MEV.
          <br />
          <br />
          I&apos;m currently working at{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://fiveelementslabs.com"
            target="_blank"
          >
            FiveElementsLabs
          </a>{" "}
          focusing on the development of{" "}
          <a
            className="text-moonlightBlue hover:opacity-80"
            href="https://tideprotocol.xyz"
            target="_blank"
          >
            Tide Protocol
          </a>
          , a tool for DeFi projects to launch, manage and track their marketing
          strategies on-chain.
          <br />
          <br />
          In my free time, I like to contribute to open-source projects related
          to the Ethereum ecosystem in Rust and Solidity. I&apos;m also always
          building personal projects to learn new things and improve my skills.
          <br />
          <br />
          To know more about me, check out my articles or my social media
          accounts.
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
          href="https://twitter.com/merklefruit"
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
    </BaseLayout>
  );
}
