import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import PostLayout from "@/components/layouts/PostLayout";
import Bookmark from "@/components/mdx/Bookmark";
import Callout from "@/components/mdx/Callout";
import Card from "@/components/mdx/Card";

interface Props {
  post: Post;
}

export default function Post({ post }: Props) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <PostLayout post={post}>
      <div
        className="prose prose-invert max-w-none font-light 
        link-wrap article-content tracking-tight leading-7"
      >
        <MDXContent components={{ Card, Bookmark, Callout }} />
      </div>
    </PostLayout>
  );
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}
