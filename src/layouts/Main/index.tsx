import Container from './styles';

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
