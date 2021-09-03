import { useState } from 'react';
import useMediaQuery from '@hooks/media/useMediaQuery';
import useWindowDimensions from '@hooks/media/useWindowDimension';
import { Nav, Item, List } from './styles';

const SideBar = () => {
  const isMobile = useMediaQuery(800);
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(width > 800);

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
          <img src="/assets/images/accounts.svg" alt="activities" />
          <span>minhas atividades</span>
        </Item>
        <Item>
          <img src="/assets/images/user.svg" alt="activities" />
          <span>Usuários</span>
        </Item>
        <Item>
          <img src="/assets/images/performance.svg" alt="activities" />
          <span>Desempenho</span>
        </Item>
        <Item>
          <img src="/assets/images/dashboard.svg" alt="activities" />
          <span>Dashboard</span>
        </Item>
      </List>
    </Nav>
  );
};
export default SideBar;
