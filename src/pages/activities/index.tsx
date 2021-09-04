import {
  Container,
  Header,
  CardContainer,
  Footer,
  FilterContainer
} from '@styles/pages/activities';
import Select from '@components/Select';
import Summary from '@components/Summary';
import Filter from '@components/Filter';
import useGetActivities from '@hooks/calls/activity/useGetActivities';
import { useState } from 'react';

const Activities = () => {
  const {
    ActivityQuery: { data, status },
    selectedAct,
    setAct
  } = useGetActivities();

  const onChangeSelect = (value) => {
    setAct(value);
  };

  const [filter, setFilter] = useState();
  const filterOptions = [
    {
      value: 'TO_RECEIVE',
      label: 'Receber documentos'
    },
    {
      value: 'TO_SEND',
      label: 'Prioridade(SLA)'
    }
  ];
  const onChangeFilter = (value) => {
    setFilter(value);
  };

  return (
    <Container>
      <Header>
        <div>
          {status === 'success' ? (
            <>
              <Select
                options={data}
                value={selectedAct}
                onChange={onChangeSelect}
                placeholder="Selecionar atividade..."
              />
              <span>{selectedAct.value.subtitle}</span>
            </>
          ) : null}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {status === 'success' ? <Summary id={selectedAct.value.id} /> : null}
        </div>
        <FilterContainer>
          <span>Organizar por</span>
          <Filter
            options={filterOptions}
            value={filter}
            onChange={onChangeFilter}
            placeholder="selecionar filtro"
          />
        </FilterContainer>
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
