import SideBar from '@components/SideBar';
import MobileSidebar from '@components/MobileSidebar';
import { useState } from 'react';
import { Container, Layout, Icon, NavButton } from './styles';

const MainLayout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Layout>
      <SideBar />
      <MobileSidebar isOpen={openNav} setOpenNav={setOpenNav} />
      <Container>
        <NavButton onClick={() => setOpenNav(true)}>
          <Icon />
        </NavButton>
        {children}
      </Container>
    </Layout>
  );
};

export default MainLayout;
