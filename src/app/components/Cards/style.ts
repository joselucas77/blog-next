import styled from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: 1rem;
  img {
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  font-size: 1.8rem;
`;
