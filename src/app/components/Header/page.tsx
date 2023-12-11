import Link from 'next/link';
import { Container } from './style';

export default function Header() {
  return (
    <Container>
      <Link href="/">Sou o cabeçalho</Link>
    </Container>
  );
}
