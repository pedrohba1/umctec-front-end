import { useState } from 'react';
/* import useMediaQuery from '@hooks/media/useMediaQuery';
import useWindowDimensions from '@hooks/media/useWindowDimension'; */
import { useRouter } from 'next/router';

import { Nav, Item, List, UserIcon, AccountsIcon, XIcon } from './styles';

const SideBar = ({ isOpen, setOpenNav }) => {
  const router = useRouter();

  /*   const isMobile = useMediaQuery(800);
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(width > 800); */
  const [route, setRoute] = useState(router.pathname);

  const check = (current) => {
    return current === route;
  };

  const changeRoute = (value) => {
    setRoute(value);
    router.push(value);
  };

  return (
    <Nav isOpen={isOpen}>
      <List>
        <Item onClick={() => setOpenNav(!isOpen)}>
          <XIcon />
        </Item>
        <Item
          onClick={() => changeRoute('/activities')}
          isSelected={check('/activities')}
        >
          <AccountsIcon color={check('/activities') ? '#2793ff' : '#8b98ba'} />
          <span>minhas</span>
          <span>atividades</span>
        </Item>
        <Item
          onClick={() => changeRoute('/users')}
          isSelected={check('/users')}
        >
          <UserIcon color={check('/users') ? '#2793ff' : '#8b98ba'} />
          <span>Usuários</span>
        </Item>
        {/* <Item>
          <PerformanceIcon color="#8b98ba" />
          <span>Desempenho</span>
        </Item>
        <Item>
          <DashboardIcon color="#8b98ba" />
          <span>Dashboard</span>
        </Item> */}
      </List>
    </Nav>
  );
};
export default SideBar;
