import { useState } from 'react';

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
import CheckAll from '@components/CheckAll';
import Paginator from '@components/Paginator';

import useGetActivities from '@hooks/calls/activity/useGetActivities';
import useGetCards from '@hooks/calls/activity/useGetCards';

const Activities = () => {
  const {
    activityQuery: { data, status },
    selectedAct,
    setAct
  } = useGetActivities();

  const onChangeSelect = (value) => {
    setAct(value);
  };

  const [checkAll, setCheckAll] = useState(false);
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

  const [page, setPage] = useState(1);

  const {
    cardsQuery: { data: cardsData },
    checkedArr,
    setChecked
  } = useGetCards(selectedAct?.value.id, filter.value, page);

  const handleCheckbox = (index) => {
    const newArr = checkedArr.map((item, i) => {
      if (i === index) {
        return !item;
      }
      return item;
    });
    setChecked(newArr);
  };

  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    setChecked(checkedArr.map((item) => !item));
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
              <span>{selectedAct?.value.subtitle}</span>
            </>
          ) : null}
        </div>
        {status === 'success' ? <Summary id={selectedAct?.value.id} /> : null}

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

      <div style={{ alignSelf: 'flex-end', margin: '1rem 0' }}>
        <CheckAll state={checkAll} onCheckAll={handleCheckAll} />
        <span>Selecionar tudo</span>
      </div>

      <CardContainer>
        {cardsData?.cards.map((card, index) => (
          <Card
            key={card.id}
            handleCheckbox={handleCheckbox}
            card={card}
            checkbox={checkedArr[index]}
            checkboxIndex={index}
          />
        ))}
      </CardContainer>
      <Footer>
        <Paginator setPage={setPage} page={page} />
      </Footer>
    </Container>
  );
};

export default Activities;
