import {
  Container,
  Header,
  CardContainer,
  Footer
} from '@styles/pages/activities';
import Select from '@components/Select';
import useGetActivities from '@hooks/calls/activity/useGetActivities';

const Activities = () => {
  const {
    ActivityQuery: { data, status },
    setSelect,
    selectState
  } = useGetActivities();

  const onChangeSelect = (value) => {
    setSelect(value);
  };

  return (
    <Container>
      <Header>
        <div>
          {status === 'success' ? (
            <Select
              status={status}
              options={data}
              value={selectState}
              onChange={onChangeSelect}
              placeholder="Selecionar atividade..."
            />
          ) : null}
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
};

export default Activities;
