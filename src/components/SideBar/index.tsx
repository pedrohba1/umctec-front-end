import { useState } from 'react';
import useMediaQuery from '@hooks/media/useMediaQuery';
import useWindowDimensions from '@hooks/media/useWindowDimension';
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
  const isMobile = useMediaQuery(800);
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(width > 800);

  const handleChecked = (route) => {
    return route;
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
        <Item>
          <AccountsIcon color="#8b98ba" />
          <span>minhas atividades</span>
        </Item>
        <Item>
          <UserIcon color="#8b98ba" />
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
