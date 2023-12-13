'use client';
import { PostData } from '../../posts/post';
import Header from '../../components/Header/page';
import Main from '../../components/Main/page';
import Markdown from 'react-markdown';
import Footer from '../../components/Footer/page';

export type PostProps = {
  post: PostData[];
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <Main>
        {post.map((data) => (
          <div key={data.id}>
            <h2>{data.attributes.title}</h2>
            <Markdown>
              {data.attributes.content
                .map((contents) => contents.children.map((child) => child.text))
                .toString()}
            </Markdown>
          </div>
        ))}
      </Main>
      <Footer />
    </>
  );
}
