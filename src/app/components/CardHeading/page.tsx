import Link from 'next/link';
import { PostCardHeading } from './style';
import { getAllTitlesPosts } from '@/app/services/get-all-data-posts';

export default async function CardHeading(): Promise<JSX.Element> {
  const posts = await getAllTitlesPosts();
  Object.keys(posts).map((postId) => {
    const post = posts[postId];
    console.log(post);
    return (
      <PostCardHeading key={post.id}>
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          {post.attributes.title}
        </Link>
      </PostCardHeading>
    );
  });
}
