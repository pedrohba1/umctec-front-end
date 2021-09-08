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
    background: #f6f7fb;
    padding-top: 2rem;
  `;
});

export const Layout = styled.div`
  height: auto;
  display: flex;
  min-height: 100vh;
  flex-direction: row;
`;

export const NavButton = styled.div`
  margin-left: 10px;
  margin-right: auto;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      color="#e7ebf7"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path fill="#1f274c" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};
