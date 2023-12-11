import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const ContainerCard = styled.div`
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const Category = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem 0;
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  margin: 3rem 0;
`;
