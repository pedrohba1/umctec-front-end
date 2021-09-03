import {
  Container,
  Header,
  CardContainer,
  Footer
} from '@styles/pages/activities';

function Home() {
  return (
    <Container>
      <Header>
        <div>
          <p> activity select</p>
        </div>
        <div>
          <p> card sumamry</p>
        </div>
        <div>
          <p> filter</p>
        </div>
      </Header>
      <div style={{ alignSelf: 'flex-end' }}>
        <p> select all</p>
      </div>

      <CardContainer>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
        <div>
          <h2>card</h2>
        </div>
      </CardContainer>

      <Footer>
        <div>
          <h2> pages</h2>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;
