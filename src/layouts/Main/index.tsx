import SideBar from '@components/SideBar';
import useWindowDimensions from '@hooks/media/useWindowDimension';
import { Container, Layout } from './styles';

const MainLayout = ({ children }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Layout>
      {width < 800 ? null : <SideBar />}
      <Container>{children}</Container>
    </Layout>
  );
};

export default MainLayout;
