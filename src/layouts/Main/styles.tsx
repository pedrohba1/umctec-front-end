import styled, { css } from 'styled-components';

export const Container = styled.main((props) => {
  const {
    // eslint-disable-next-line no-empty-pattern
    theme: {}
  } = props;

  return css`
    transition: all 0.2s;
    display: grid;
    place-items: center;
    width: 100vw;
    margin: 1.5rem calc(1.5rem + 5vw);
  `;
});

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
