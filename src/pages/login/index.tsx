import { useRef } from 'react';
import useLogin from '@hooks/calls/useLogin';
import validateLogin from '@hooks/validations/validateLogin';
import {
  Form,
  DefInput as Input,
  Button,
  PasswordInput,
} from '@styles/pages/login';

import Link from 'next/link';

import { useSnackbar } from 'notistack';

function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, mutate } = useLogin();

  const formRef = useRef(null);

  const handleSubmit = async (fieldValues) => {
    console.log(fieldValues);
    try {
      await validateLogin(fieldValues, formRef);
      mutate(fieldValues);
    } catch {
      enqueueSnackbar(`verify your data`, {
        variant: 'error'
      });
    }
  };

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" />
        <PasswordInput name="password" />
        <Button>{isLoading ? 'loading' : 'login'}</Button>
      </Form>
      <Link href="/test">
          <a>teste</a>
        </Link>
    </>
  );
}

export default Login;
