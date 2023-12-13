'use client';
import { getPost } from '../../services/get-post';
import Post from '../../containers/post/page';

interface SlugProps {
  params: { id: number };
}

const DynamicPost = async ({ params }: SlugProps) => {
  const posts = await getPost(params.id);
  return <Post post={posts} />;
};

export default DynamicPost;
