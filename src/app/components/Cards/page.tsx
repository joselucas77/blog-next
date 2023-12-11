'use client';
import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './style';

export type PostCardProps = {
  id: number;
  title: string;
  cover: string;
  name: string;
};

export default async function Card({ id, title, cover, name }: PostCardProps) {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${id}`}>
          <img src={cover} alt={name} />
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${id}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
}
