import { useState, useEffect } from 'react';
import useMediaQuery from '@hooks/media/useMediaQuery';
import useWindowDimensions from '@hooks/media/useWindowDimension';
import { useRouter } from 'next/router';

import Link from 'next';
import {
  Nav,
  Item,
  List,
  UserIcon,
  AccountsIcon,
  PerformanceIcon,
  DashboardIcon
} from './styles';

const SideBar = () => {
  const router = useRouter();

  const isMobile = useMediaQuery(800);
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(width > 800);
  const [route, setRoute] = useState(router.pathname);

  const check = (current) => {
    return current === route;
  };

  const changeRoute = (value) => {
    setRoute(value);
    router.push(value);
  };

  return (
    <Nav>
      <img
        src="/assets/images/brand.svg"
        alt="brand logo"
        style={{
          boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.2)',
          width: '100%'
        }}
      />
      <List>
        <Item
          onClick={() => changeRoute('/activities')}
          isSelected={check('/activities')}
        >
          <AccountsIcon color={check('/activities') ? '#2793ff' : '#8b98ba'} />
          <span>minhas atividades</span>
        </Item>
        <Item
          onClick={() => changeRoute('/users')}
          isSelected={check('/users')}
        >
          <UserIcon color={check('/users') ? '#2793ff' : '#8b98ba'} />
          <span>Usuários</span>
        </Item>
        <Item>
          <PerformanceIcon color="#8b98ba" />
          <span>Desempenho</span>
        </Item>
        <Item>
          <DashboardIcon color="#8b98ba" />
          <span>Dashboard</span>
        </Item>
      </List>
    </Nav>
  );
};
export default SideBar;
