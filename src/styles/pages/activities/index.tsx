import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  justify-content: space-between;
  & > div {
    width: 100%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  span {
    margin-right: 5px;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  margin: 2rem calc(1.5rem + 5vw);
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;
