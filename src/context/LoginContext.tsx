/* eslint-disable camelcase */
import { createContext, ReactNode, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import instance from '@api/axios';
import jwtDecode from 'jwt-decode';

interface JwtTypes {
  access_operations: object;
  account: string;
  aud: string;
  exp: number;
  iat: number;
  is_adam: boolean;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
  typ: string;
}

type LoginContextData = {
  token: string;
  isAuth: boolean;
  jwt: JwtTypes;
  // eslint-disable-next-line no-unused-vars
  handleLogin: (resToken: string) => void;
  handleLogOut: () => void;
};

type LoginProviderProps = {
  children: ReactNode;
};

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [jwt, setJwt] = useState<JwtTypes>({} as JwtTypes);
  const isAuth = !!token;

  async function handleLogin(resToken: string) {
    setToken(resToken);
    const decoded = jwtDecode<JwtTypes>(resToken);
    setJwt(decoded);
    setCookie(undefined, 'token', resToken, {
      maxAge: 60 * 60 * 24 // 24 hour
    });

    instance.defaults.headers.Authorization = `Bearer ${resToken}`;

    Router.push('/activities');
  }

  function handleLogOut() {
    destroyCookie(null, 'token');
    setToken(null);
    setJwt({} as JwtTypes);
    Router.push('/login');
  }

  useEffect(() => {
    const { token: cookToken } = parseCookies();
    setToken(cookToken);
    if (!(typeof cookToken === 'undefined')) {
      const decoded = jwtDecode<JwtTypes>(cookToken);
      instance.defaults.headers.Authorization = `Bearer ${cookToken}`;
      setJwt(decoded);
    } else {
      setJwt({} as JwtTypes);
      Router.push('/login');
    }
  }, [router.asPath]);

  return (
    <LoginContext.Provider
      value={{
        token,
        isAuth,
        handleLogOut,
        handleLogin,
        jwt
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
