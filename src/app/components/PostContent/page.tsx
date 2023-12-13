import { Container } from './style';
import Markdown from 'react-markdown';

export type PostContainerProps = {
  content: string;
};

export const PostContant = ({ content }: PostContainerProps) => {
  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  );
};
