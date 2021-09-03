import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem calc(1.5rem + 5vw);
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  div {
    border: 1px solid black;
    height: 20vh;
    text-align: center;
  }
`;