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
import Card from '@components/Card';
import useGetActivities from '@hooks/calls/activity/useGetActivities';
import useGetCards from '@hooks/calls/activity/useGetCards';
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

  const [filter, setFilter] = useState<{ value: string; label: string }>({
    value: '',
    label: 'Todos'
  });

  const filterOptions = [
    {
      value: '',
      label: 'Todos'
    },
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

  const { data: cardsData } = useGetCards(selectedAct?.value.id, filter.value);

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
        {cardsData?.cards.map((card) => (
          <Card {...card} />
        ))}
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
