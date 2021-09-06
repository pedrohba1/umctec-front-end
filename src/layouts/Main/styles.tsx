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
    width: 100%;
    height: auto;
    background: #f6f7fb;
    padding-top: 2rem;
  `;
});

export const Layout = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
`;
