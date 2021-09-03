import { useMutation } from 'react-query';
import instance from '@api/axios';
import { useContext } from 'react';
import { LoginContext } from 'src/context/LoginContext';
import Router from 'next/router';

type LoginData = {
  email: string;
  password: string;
  token: string;
};

type responseTypes = {
  data: LoginData;
};

type ResponseError = {
  response: {
    status: number;
    data: {
      error: [
        {
          message: string;
          code: number;
        }
      ];
    };
  };
};

const useLogin = () => {
  const { handleLogin } = useContext(LoginContext);

  return useMutation<responseTypes>(
    (data) => {
      return instance.post('/v1/backoffice/session/clients/login', data);
    },
    {
      onSuccess: (res) => {
        handleLogin(res.data.token);
      },
      onError: ({ response }: ResponseError) => {
        if (response.status === 400 && response.data.error[0].code === 1338) {
          return Router.push('/change-password');
        }
        return null;
      }
    }
  );
};

export default useLogin;
