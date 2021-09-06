import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 100%;
  padding: 4%;
  transition: all 0.2s ease;
  max-width: 100%;

  @media (min-width: 769px) {
    max-width: 400px;
    padding: 0 120px;
  }
`;

export const Background = styled.div`
  background-size: cover;
  background-position: right;
  flex: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  place-content: center;
  margin-bottom: 50px;
  justify-content: center;
  width: 100%;
  height: auto;
`;
