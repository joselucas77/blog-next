'use client';
import { Container } from './style';
import Header from '../../components/Header/page';
import Main from '../../components/Main/page';
import Card from '@/app/components/Cards/page';
import { getAllTitlesPosts } from '@/app/services/get-all-data-posts';

export default async function Home() {
  const posts = await getAllTitlesPosts();

  return (
    <>
      <Header />
      <Main>
        <Container>
          {}
          {posts.data.map((post) => (
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
    </>
  );
}

// 'use client';
// import { useEffect, useState } from 'react';
// import { PostData } from '@/app/posts/post';

// const getPosts = async (): Promise<PostData[]> => {
//   const posts = await fetch(
//     'https://blog-strapi-app-5q43.onrender.com/api/posts?populate=*',
//   );
//   const jsonPosts = await posts.json();
//   return jsonPosts.data;
// };

// export default function Home() {
//   const [posts, setPosts] = useState<PostData[]>([]);

//   Object.keys(posts).map((postId) => {
//     const post: string = posts[postId];
//     console.log(post.attributes.cover.data.attributes.formats.small.url);
//   });

//   useEffect(() => {
//     getPosts().then((response) => setPosts(response));
//   }, [posts]);

//   console.log(
//     posts.map(
//       (post) => post.attributes.cover.data.attributes.formats.small.url,
//     ),
//   );

//   return (
//     <div>
//       {posts.map((post) => (
//         <h2 key={post.id}>{post.attributes.title}</h2>
//       ))}
//     </div>
//   );
// }
