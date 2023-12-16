'use client';
import { PostData } from '../../posts/post';
import Header from '../../components/Header/page';
import Main from '../../components/Main/page';
import Footer from '../../components/Footer/page';
import Heading from '../../components/PostHeading/page';
import PostCover from '../../components/PostCover/page';
import PostDetails from '../../components/PostDetails/page';
import { getAllText } from '../../services/get-all-text';
import { PostContant } from '../../components/PostContent/page';

export type PostProps = {
  post: PostData;
};

export default async function Post({ post }: PostProps) {
  const postText = await getAllText(post);
  return (
    <>
      <Header />
      <Main>
        <div key={post.id}>
          <Heading>{post.attributes.title}</Heading>
          <PostCover
            coverUrl={post.attributes.cover.data.attributes.formats.large.url}
            alt={post.attributes.cover.data.attributes.name}
          />
          <PostDetails
            date={post.attributes.createdAt}
            author={post.attributes.author.data.attributes.name}
            category={post.attributes.category.data.attributes.name}
          />
          <PostContant content={postText} />
        </div>
      </Main>
      <Footer />
    </>
  );
}
