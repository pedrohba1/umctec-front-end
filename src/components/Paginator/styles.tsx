import styled from 'styled-components';

const Container = styled.div`
  min-width: 25vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-size: 1.5rem;
  }
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

export default Container;
