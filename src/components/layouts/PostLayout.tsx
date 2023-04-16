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
    <div className="px-4 sm:px-2 md:px-0 max-w-2xl mx-auto py-24">
      <Head>
        <title>{`nico.bio / ${post.title}`}</title>
      </Head>

      <h2 className="text-2xl font-medium">{post.title}</h2>

      <div className="flex items-center justify-between pt-1 gap-3">
        <time dateTime={post.date} className="text-moonlightText font-light">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>

        <Link href="/articles" className="hover:text-moonlightStone">
          <span className="underline decoration-dotted decoration-moonlightStone">
            Back to Articles
          </span>
        </Link>
      </div>

      <main className="pt-8 pb-48">{children}</main>
    </div>
  );
}
