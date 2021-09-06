import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DotContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  span {
    margin: 0 5px;
    font-size: 1.2rem;
  }
`;

type DotProps = {
  color: string;
};

export const Dot = styled.span((props: DotProps) => {
  const { color } = props;

  return css`
    height: 0.75rem;
    width: 0.75rem;
    background-color: ${color};
    border-radius: 50%;
    display: inline-block;
  `;
});

export default Container;
