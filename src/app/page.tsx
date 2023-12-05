import { PostData } from './posts/post';

/* eslint-disable prettier/prettier */
async function getData() {
  const res = await fetch(
    'https://blog-strapi-app-5q43.onrender.com/api/posts',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const posts = await res.json();

  // return res.json();
  return posts.data;
}

export type HomeProps = {
  map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arg0: (post: any) => import('react').JSX.Element,
  ): import('react').ReactNode;
  data: PostData[];
};

export default async function Page() {
  const data: HomeProps = await getData();

  return (
    <main>
      {data.map((post) => (
        <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
      ))}
    </main>
  );
}
