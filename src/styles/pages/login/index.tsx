import styled from 'styled-components';
import { Form as DefForm } from '@unform/web';
import Link from 'next/link';
import Input from '@components/Input';

const defSpacing = '1rem';

export const Form = styled(DefForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DefInput = styled(Input)`
  margin-top: ${defSpacing};
`;
export const PasswordInput = styled(Input)`
  margin-top: ${defSpacing};
`;

export const Button = styled.button`
  margin-top: ${defSpacing};
`;

export const DefLink = styled(Link)`
  margin-top: ${defSpacing};
`;
