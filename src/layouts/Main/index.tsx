import SideBar from '@components/SideBar';
import { Container, Layout } from './styles';

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <SideBar />
      <Container>{children}</Container>
    </Layout>
  );
};

export default MainLayout;
