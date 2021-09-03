import styled, { css } from 'styled-components';

export const Nav = styled.main((props) => {
  const {
    // eslint-disable-next-line no-empty-pattern
    theme: {}
  } = props;

  return css`
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    background: #e7ebf7;
  `;
});

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-top: 3rem;
  display: block;
  height: 3rem;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    color: #8b98ba;
    line-height: 1rem;
    font-weight: bold;
  }
`;

export const SideBarMobile = styled.main((props) => {
  const {
    // eslint-disable-next-line no-empty-pattern
    theme: {}
  } = props;

  return css`
    transition: all 0.2s;
    display: grid;
    place-items: center;

    margin: 1.5rem calc(1.5rem + 5vw);
  `;
});
