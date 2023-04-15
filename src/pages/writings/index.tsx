import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

import BaseLayout from "@/components/layouts/BaseLayout";

interface Props {
  posts: Post[];
}

export default function Writings({ posts }: Props) {
  return (
    <BaseLayout title="Writings">
      <div className="font-light flex flex-col gap-3">
        {posts.map((post, idx) => (
          <Link key={idx} href={post.url} className="hover:opacity-80">
            <div className="flex items-center justify-between">
              <h3 className="font-normal">{post.title}</h3>
              <p className="text-moonlightStone text-sm">
                {format(parseISO(post.date), "LLL dd yyyy")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
