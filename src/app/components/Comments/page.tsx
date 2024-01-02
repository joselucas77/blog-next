// 'use client';
// import { Container } from './style';
// import { DiscussionEmbed } from 'disqus-react';

// export type CommentsProps = {
//   title: string;
//   slug: string;
// };

// export default async function Comments({ title, slug }: CommentsProps) {
//   const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
//   const disqusConfig = {
//     url: pageUrl,
//     indentifer: slug,
//     title: title,
//   };
//   return (
//     <Container>
//       <DiscussionEmbed shortname="yourfavoriteblog-1" config={disqusConfig} />
//     </Container>
//   );
// }

import { DiscussionEmbed } from 'disqus-react';
import { Container } from './style';

export type CommentsProps = {
  slug: string;
  title: string;
  id: number;
};

export default async function Comments({ slug, title, id }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-wellington-araujo"
        config={{
          url: `http://localhost:3000/post/${id}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
