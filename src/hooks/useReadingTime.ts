import { Post } from "contentlayer/generated";

export default function useReadingTime(post: Post) {
  const content = post.body.raw;
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s/g).length;
  const minutes = wordCount / wordsPerMinute;
  const readTime = Math.ceil(minutes);

  return readTime;
}
