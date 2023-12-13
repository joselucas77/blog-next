import { Container } from './style';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export default function PostCover({ coverUrl, alt }: PostCoverProps) {
  return <Container src={coverUrl} alt={alt}></Container>;
}
