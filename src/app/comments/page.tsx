// yourfavoriteblog-1.disqus.com
import { DiscussionEmbed } from 'disqus-react';
import { Container } from './style';

export type CommentsProps = {
  id: number;
  slug: string;
  title: string;
};

export default function Comments({ id, slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="yourfavoriteblog-1"
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
