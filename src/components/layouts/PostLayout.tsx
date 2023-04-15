import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Head from "next/head";

interface Props {
  post: Post;
  children: React.ReactNode;
}

export default function PostLayout({ post, children }: Props) {
  return (
    <div className="max-w-2xl mx-auto pt-24">
      <Head>
        <title>{`nico.bio / ${post.title}`}</title>
      </Head>

      <div className="flex items-center justify-start">
        <h2 className="text-2xl font-medium">{post.title}</h2>
      </div>

      <div className="flex items-center justify-start pt-3 gap-3">
        <p>Read time: x min</p>

        <time dateTime={post.date} className="text-moonlightStone font-light">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>

      <main className="pt-8">{children}</main>
    </div>
  );
}
