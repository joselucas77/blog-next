import Link from 'next/link';
import { Container } from './style';

export default function Header() {
  return (
    <Container>
      <Link href="/">Your Favorite Blog</Link>
    </Container>
  );
}
