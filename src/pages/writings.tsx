import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import BaseLayout from "@/components/layouts/BaseLayout";

interface Props {
  posts: typeof allPosts;
}

export default function Writings({ posts }: Props) {
  return (
    <BaseLayout title="Writings">
      {posts.map((post, idx) => (
        <div key={idx}>{post.title}</div>
      ))}
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
