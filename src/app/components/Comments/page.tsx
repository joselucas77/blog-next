'use client';
import { Container } from './style';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  title: string;
  slug: string;
};

export default async function Comments({ title, slug }: CommentsProps) {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const disqusConfig = {
    url: pageUrl,
    indentifer: slug,
    title: title,
  };
  return (
    <Container>
      <DiscussionEmbed shortname="yourfavoriteblog-1" config={disqusConfig} />
    </Container>
  );
}
