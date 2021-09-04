import {
  Container,
  Header,
  CardContainer,
  Footer
} from '@styles/pages/activities';
import Select from '@components/Select';
import Summary from '@components/Summary';
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
            <>
              <Select
                status={status}
                options={data}
                value={selectState}
                onChange={onChangeSelect}
                placeholder="Selecionar atividade..."
              />
              <span>{selectState.value.subtitle}</span>
            </>
          ) : null}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {status === 'success' ? <Summary id={selectState.value.id} /> : null}
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
