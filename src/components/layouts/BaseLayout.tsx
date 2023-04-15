import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function BaseLayout({ title, children }: Props) {
  return (
    <div className="max-w-2xl mx-auto pt-24">
      <Head>
        <title>{`nico.bio / ${title}`}</title>
      </Head>

      <div className="flex items-center justify-start">
        <h2 className="text-2xl font-medium">{title}</h2>
      </div>

      <Nav />

      <main className="pt-10 w-full">{children}</main>
    </div>
  );
}

function Nav() {
  const router = useRouter();

  return (
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
  );
}
