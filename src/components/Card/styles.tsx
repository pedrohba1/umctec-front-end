import styled, { css } from 'styled-components';

const Container = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 0px 1px 4px 0.4px #dedede;
  text-align: center;
  background: #ffffff;
  border-radius: 2px;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const BillItem = styled.div`
  text-align: left;
  span {
    display: block;
  }
  span:last-of-type {
    font-size: 1rem;
    font-weight: bold;
  }
`;

type DotProps = {
  slaStatus: string;
};

export const NameContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 0.2rem;
  flex-direction: column;
  span {
    display: flex;
    line-height: 1.5rem;
  }
  span:first-of-type {
    font-size: 1.5rem;
  }
  span:last-of-type {
    font-size: 1rem;
    font-weight: regular;
  }
`;

export const BillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DotContainer = styled.span((props: DotProps) => {
  const { slaStatus } = props;

  let color = '#fff';
  switch (slaStatus) {
    case 'OK':
      color = '#20bf6b';
      break;
    case 'WARNING':
      color = '#ffc734';
      break;
    case 'DELAYED':
      color = '#fd5958';
      break;
    default:
      color = '#fff';
      break;
  }

  return css`
    height: 4.2rem;
    width: 4.2rem;
    background-color: ${color};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span:first-of-type {
      font-size: 1.7rem;
      font-weight: bold;
    }

    span:last-of-type {
      font-size: 1rem;
      font-weight: regular;
    }

    span {
      text-align: center;
      line-height: 1.4rem;
      color: #fff;
      display: block;
    }
  `;
});

export default Container;
