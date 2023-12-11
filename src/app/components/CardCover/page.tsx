// import Link from 'next/link';
// import { PostCardCover } from './style';
// import { getAllUploads } from '@/app/services/get-all-data-posts';

// export default async function CardCover(): Promise<JSX.Element> {
//   const covers = await getAllUploads();
//   Object.keys(covers).map((postId) => {
//     const cover = covers[postId];
//     console.log(cover);
//     // console.log(cover.name);
//     return (
//       <PostCardCover key={cover.id}>
//         <Link href="/post/[slug]" as={`/post/${cover.id}`}>
//           <img src={cover.formats.small.url} alt={cover.name} />
//         </Link>
//       </PostCardCover>
//     );
//   });
// }

import Link from 'next/link';
import { PostCardCover } from './style';
import { getAllUploads } from '@/app/services/get-all-data-posts';

export default async function CardCover(): Promise<JSX.Element> {
  const covers = await getAllUploads();

  Object.keys(covers).map((postId) => {
    const cover = covers[postId];
    console.log(cover);
    // console.log(cover.name);
    return (
      <PostCardCover key={cover.id}>
        <Link href="/post/[slug]" as={`/post/${cover.id}`}>
          <img src={cover.formats.small.url} alt={cover.name} />
        </Link>
      </PostCardCover>
    );
  });
}

// import Link from 'next/link';
// import { PostCardCover } from './style';
// import { getAllUploads } from '@/app/services/get-all-data-posts';

// export default function CardCover({ covers }): JSX.Element {
//   const coverElements = covers.map((cover) => (
//     <PostCardCover key={cover.id}>
//       <Link href="/post/[slug]" as={`/post/${cover.id}`}>
//         <img src={cover.formats.small.url} alt={cover.name} />
//       </Link>
//     </PostCardCover>
//   ));

//   return <>{coverElements}</>;
// }

// export async function getServerSideProps() {
//   const covers = await getAllUploads();
//   return { props: { covers } };
// }

// import Link from 'next/link';
// import { PostCardCover } from './style';
// import { useUploads } from './useUploads';

// export default function CardCover(): JSX.Element {
//   const uploads = useUploads();

//   const coverElements = uploads.map((cover) => (
//     <PostCardCover key={cover.id}>
//       <Link href="/post/[slug]" as={`/post/${cover.id}`}>
//         <img src={cover.formats.small.url} alt={cover.name} />
//       </Link>
//     </PostCardCover>
//   ));

//   return <>{coverElements}</>;
// }
