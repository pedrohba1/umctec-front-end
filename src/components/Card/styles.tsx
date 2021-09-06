import styled, { css } from 'styled-components';

const Container = styled.div`
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

export const ValueContainer = styled.div`
  background: #f5f6fa;
  padding: 5px 10px;
  display: flex;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  span {
    color: #2c2e3a;
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BillContainer = styled.div`
  padding: 5px 10px;
  display: flex;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  span {
    color: #2c2e3a;
    font-size: 1.5rem;
  }
  @media (max-width: 1200px) {
    display: grid;
    align-content: space-around;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }
`;

export const BillItem = styled.div`
  text-align: left;
  span {
    font-size: 1rem;
    display: block;
  }
  span:last-of-type {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const PendencyContainer = styled.div`
  border: 2px solid #2793ff;
  border-radius: 2rem;
  text-align: center;
  width: 40%;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 20%;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
  span {
    display: flex;
    padding: 0.2em 0.2em;
    font-weight: bold;
    color: #2793ff;
    font-size: 1.1rem;
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
    margin-bottom: 1rem;

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

export const Document = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        fill="#4E566D"
        fillRule="evenodd"
        d="M23.428 2.5c.868 0 1.572.698 1.572 1.557v21.886c0 .86-.704 1.557-1.572 1.557H6.572A1.565 1.565 0 015 25.943V9.633h.547c.044.003.092.006.137.006H9.99c1.222 0 2.215-.983 2.215-2.193V3.18c0-.056-.003-.112-.01-.165V2.5zM15.32 20.735h-5.5a.74.74 0 00-.742.736.74.74 0 00.743.736h5.496c.41 0 .746-.33.746-.736a.74.74 0 00-.743-.736zm5.495-3.757H9.821a.74.74 0 00-.743.736.74.74 0 00.743.736h10.994a.74.74 0 00.743-.736.74.74 0 00-.743-.736zm0-3.989H9.821a.74.74 0 00-.743.736.74.74 0 00.743.736h10.994a.74.74 0 00.743-.736.74.74 0 00-.743-.736zM10.645 2.524c.338 0 .665.262.665.656v4.28a1.313 1.313 0 01-1.308 1.296H5.684c-.592 0-.886-.707-.47-1.119l4.967-4.92a.646.646 0 01.463-.193z"
      />
    </svg>
  );
};

export const Attachment = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={31}
      viewBox="0 0 31 31"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h31v31H0z" />
        <path
          fill="#4E566D"
          d="M23.427 6.678c1.941 1.979 1.972 5.172.07 7.189l-.005.005-1.528 1.558-6.876 7.008a3.58 3.58 0 01-5.117-.01 3.714 3.714 0 01-.008-5.176l6.874-7.01a1.094 1.094 0 011.562 0 1.11 1.11 0 010 1.552l-6.874 7.01a1.493 1.493 0 000 2.081 1.392 1.392 0 002.002 0l6.877-7.007 1.528-1.557a2.986 2.986 0 00-.001-4.16 2.817 2.817 0 00-4.041.001L16.617 9.46l-7.13 7.267-.505.515C7.34 18.97 7.36 21.728 9.03 23.43a4.235 4.235 0 006.026.051l7.639-7.786a1.093 1.093 0 011.841.493c.1.377-.007.78-.28 1.058l-7.639 7.787a6.422 6.422 0 01-9.19-.01c-2.526-2.576-2.531-6.746-.01-9.328l7.64-7.787 1.28-1.303a5 5 0 017.091.073z"
        />
      </g>
    </svg>
  );
};

export default Container;
