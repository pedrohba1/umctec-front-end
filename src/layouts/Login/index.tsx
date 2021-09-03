import { Container, Content } from './styles';

const LoginLayout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default LoginLayout;
