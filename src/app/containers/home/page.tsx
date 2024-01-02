'use client';
import { Container } from './style';
import Header from '../../components/Header/page';
import Main from '../../components/Main/page';
import Card from '../../components/Cards/page';
import Footer from '../../components/Footer/page';
import { getAllPosts } from '../../services/get-all-data-posts';

export default async function Home() {
  const posts = await getAllPosts('sort=id:desc');
  // const posts = await getAllPosts(
  //   'sort=id:desc&pagination[start]=0&pagination[limit]=3',
  // );

  return (
    <>
      <Header />
      <Main>
        <Container>
          {posts.map((post) => (
            <Card
              key={post.id}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              id={post.id}
              title={post.attributes.title}
              name={post.attributes.title}
            />
          ))}
        </Container>
      </Main>
      <Footer />
    </>
  );
}
