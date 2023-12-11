import * as S from './style';

export type MainContent = {
  children: React.ReactNode;
};

export default function Main({ children }: MainContent) {
  return <S.Container>{children}</S.Container>;
}
