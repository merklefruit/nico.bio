import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Head from "next/head";
import Link from "next/link";

interface Props {
  post: Post;
  children: React.ReactNode;
}

export default function PostLayout({ post, children }: Props) {
  return (
    <div className="px-4 sm:px-2 md:px-0 max-w-2xl mx-auto pt-16 pb-24">
      <Head>
        <title>{`nico.bio / ${post.title}`}</title>
      </Head>

      <div className="pb-8">
        <Link href="/articles" className="hover:text-moonlightStone">
          <span className="flex items-center gap-0.5">
            <span className="text-sm font-medium">{"<-"}</span>{" "}
            <span className="underline decoration-dotted decoration-moonlightStone">
              Back
            </span>
          </span>
        </Link>
      </div>

      <h2 className="text-2xl font-medium">{post.title}</h2>

      <div className="flex items-center justify-between pt-1 gap-3">
        <time dateTime={post.date} className="text-moonlightText font-light">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>

      <main className="pt-4">{children}</main>
    </div>
  );
}
