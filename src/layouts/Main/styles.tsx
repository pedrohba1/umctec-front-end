import styled, { css } from 'styled-components';

export const Container = styled.main((props) => {
  const {
    // eslint-disable-next-line no-empty-pattern
    theme: {}
  } = props;

  return css`
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    background: #f6f7fb;
    width: 100vw;
    padding-top: 2rem;
  `;
});

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
