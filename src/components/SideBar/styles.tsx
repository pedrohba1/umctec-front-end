import styled, { css } from 'styled-components';

export const Nav = styled.main`
  background: #e7ebf7;
  @media (max-width: 800px) {
    display:none;
  }
    align-items: center;
  };
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

type ItemProps = {
  isSelected?: boolean;
};

export const Item = styled.div((props: ItemProps) => {
  const { isSelected } = props;

  return css`
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
      user-select: none; /* supported by Chrome and Opera */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      color: ${isSelected ? '#2793ff' : '#8b98ba'};
      text-align: center;
      line-height: 1rem;
      font-weight: bold;
    }
  `;
});

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

export const AccountsIcon = ({ color, ...rest }) => {
  return (
    <div style={{ alignSelf: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 20 20"
        {...rest}
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M1.25 3.75v10.469c0 .086.07.156.156.156H2.5c.086 0 .156-.07.156-.156V4.53h13.438c.086 0 .156-.07.156-.156V3.281a.156.156 0 00-.156-.156H1.875a.625.625 0 00-.625.625zm2.5 2.5v10c0 .346.28.625.625.625H14.74a.624.624 0 00.442-.184l3.384-3.384a.637.637 0 00.108-.145h.037v-.082a.62.62 0 00.039-.215V6.25a.625.625 0 00-.625-.625H4.375a.625.625 0 00-.625.625zm12.973 6.914l-1.684 1.682v-1.682h1.684zm.62-6.133v4.883H14.57a.78.78 0 00-.78.781v2.774H5.155V7.03h12.188z"
        />
      </svg>
    </div>
  );
};

export const UserIcon = ({ color, ...rest }) => {
  return (
    <div style={{ alignSelf: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 20 20"
        {...rest}
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h20v20H0z" />
          <path
            fill={color}
            d="M2.5 18.254c0-3.49 3.439-6.319 7.917-6.319 4.477 0 7.916 2.83 7.916 6.319h-1.602c0-2.617-3.31-4.74-6.314-4.74-3.005 0-6.315 2.123-6.315 4.74H2.5zm7.917-7.109c-2.656 0-4.807-2.12-4.807-4.74 0-2.618 2.151-4.738 4.807-4.738 2.655 0 4.806 2.12 4.806 4.739 0 2.618-2.15 4.74-4.806 4.74zm0-1.58c1.77 0 3.204-1.413 3.204-3.16 0-1.745-1.434-3.159-3.204-3.159-1.77 0-3.205 1.414-3.205 3.16 0 1.746 1.434 3.16 3.205 3.16z"
          />
        </g>
      </svg>
    </div>
  );
};

export const PerformanceIcon = ({ color, ...rest }) => {
  return (
    <div style={{ alignSelf: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        viewBox="0 0 17 18"
        {...rest}
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M4.283 8c.217.002.384.03.384.367v8.39c0 .37-.202.41-.45.41H.95c-.248 0-.45-.04-.45-.41v-8.39C.5 7.997.702 8 .95 8zm5.84-2.5c.213.003.377.032.377.348v10.93c0 .351-.202.389-.45.389H6.784c-.249 0-.45-.038-.45-.39V5.849c0-.351.201-.348.45-.348zm5.833-5c.214.003.377.032.377.349v15.928c0 .352-.202.39-.45.39h-3.266c-.248 0-.45-.038-.45-.39V.849c0-.352.202-.349.45-.349zM9.458 6.491H7.375v9.914h2.083V6.491zm5.834-4.997h-2.084v14.91h2.084V1.493zM3.625 8.93H1.542v7.434h2.083V8.93z"
        />
      </svg>
    </div>
  );
};

export const DashboardIcon = ({ color, ...rest }) => {
  return (
    <div style={{ alignSelf: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 20 20"
        {...rest}
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M18.062 7.531a8.699 8.699 0 00-1.875-2.781A8.711 8.711 0 0010 2.188 8.709 8.709 0 003.812 4.75a8.748 8.748 0 00-1.875 2.781 8.689 8.689 0 00-.687 3.407 8.733 8.733 0 003.123 6.7l.033.028a.634.634 0 00.403.147h10.384c.147 0 .29-.053.403-.147l.033-.027a8.74 8.74 0 003.121-6.701 8.708 8.708 0 00-.688-3.407zm-3.19 8.797H5.128a7.253 7.253 0 01-2.394-5.39c0-1.942.756-3.766 2.13-5.137A7.213 7.213 0 0110 3.67c1.941 0 3.766.757 5.137 2.13a7.217 7.217 0 012.129 5.137 7.25 7.25 0 01-2.395 5.39zm-2.694-8.096a.158.158 0 00-.221 0l-1.65 1.65a1.093 1.093 0 10.773.774l1.65-1.65a.155.155 0 000-.22l-.552-.554zM9.57 6.25h.86c.086 0 .156-.07.156-.156V4.53a.156.156 0 00-.156-.156h-.86a.156.156 0 00-.156.156v1.563c0 .086.07.156.156.156zm5.078 4.258v.86c0 .085.07.155.157.155h1.562c.086 0 .156-.07.156-.156v-.86a.156.156 0 00-.156-.155h-1.562a.157.157 0 00-.157.156zm.248-3.852l-.607-.607a.157.157 0 00-.22 0l-1.106 1.105c-.06.06-.06.16 0 .221l.607.607c.06.061.16.061.221 0l1.105-1.105a.155.155 0 000-.22zM5.94 6.05a.157.157 0 00-.22 0l-.608.607c-.06.06-.06.16 0 .221l1.106 1.105c.06.061.16.061.22 0l.608-.607c.06-.06.06-.16 0-.22L5.939 6.048zm-.822 4.303H3.555a.157.157 0 00-.157.156v.86c0 .085.07.155.157.155h1.562c.086 0 .156-.07.156-.156v-.86a.156.156 0 00-.156-.155z"
        />
      </svg>
    </div>
  );
};
