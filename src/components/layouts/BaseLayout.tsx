import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function BaseLayout({ title, icon, children }: Props) {
  return (
    <div className="px-4 sm:px-2 md:px-0 max-w-2xl mx-auto py-24">
      <Head>
        <title>{`nico.bio / ${title}`}</title>
      </Head>

      <div className="flex items-center justify-start gap-2.5">
        {icon}
        <h2 className="text-2xl font-medium">{title}</h2>
      </div>

      <Nav />

      <main className="pt-10 w-full animate-in fade-in fade-out ease-in-out duration-1000">
        {children}
      </main>
    </div>
  );
}

function Nav() {
  const router = useRouter();

  return (
    <div className="pt-2 flex gap-3 items-center justify-end w-full">
      <Link
        href="/articles"
        className={`hover:text-moonlightStone underline 
          underline-offset-2 decoration-dotted decoration-moonlightStone ${
            router.pathname.includes("/articles")
              ? "text-moonlightStone cursor-default no-underline"
              : ""
          } `}
      >
        Articles
      </Link>

      <Link
        href="/projects"
        className={`hover:text-moonlightStone underline 
          underline-offset-2 decoration-dotted decoration-moonlightStone ${
            router.pathname.includes("/projects")
              ? "text-moonlightStone cursor-default no-underline"
              : ""
          } `}
      >
        Projects
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
