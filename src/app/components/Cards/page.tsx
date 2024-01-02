'use client';
import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from '../Cards/style';

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
        <Link href="/post/[id]" as={`/post/${id}`}>
          <img src={cover} alt={name} />
        </Link>
      </PostCardCover>

      <PostCardHeading>{title}</PostCardHeading>
    </Container>
  );
}
