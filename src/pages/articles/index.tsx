import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { useMemo } from "react";

import BaseLayout from "@/components/layouts/BaseLayout";
import ClientSideOnly from "@/components/lib/ClientSideOnly";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  posts: Post[];
}

export default function Articles({ posts }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dateFormat = useMemo(
    () => (isMobile ? "MM/dd/yyyy" : "LLLL d, yyyy"),
    [isMobile]
  );

  return (
    <BaseLayout title="Articles">
      <div className="font-light flex flex-col gap-4">
        {posts.map((post, idx) => (
          <Link key={idx} href={post.url} className="hover:opacity-80">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-normal">{post.title}</h3>
              <ClientSideOnly>
                <p className="text-moonlightStone text-sm">
                  {format(parseISO(post.date), dateFormat)}
                </p>
              </ClientSideOnly>
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
