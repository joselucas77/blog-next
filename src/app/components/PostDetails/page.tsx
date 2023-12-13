import { Container } from './style';
import Date from '../Date/page';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export default function PostDetails({
  date,
  author,
  category,
}: PostDetailsProps) {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} (: {category}
    </Container>
  );
}
