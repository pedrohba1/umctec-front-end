import { Card as CardData } from '@hooks/calls/activity/useGetCards';
import Checkbox from '@components/Checkbox';
import Container, { DotContainer, NameContainer } from './styles';

interface Props {
  checkboxIndex: number;
  card: CardData;
  checkbox: boolean;
  handleCheckbox: Function;
}

const Card = (props: Props) => {
  const {
    card: { daysSinceCreated, slaStatus, patient, insurance },
    checkbox,
    handleCheckbox,
    checkboxIndex
  } = props;
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: '' }}>
        <div style={{ display: 'flex' }}>
          <DotContainer slaStatus={slaStatus}>
            <span>{daysSinceCreated}</span>
            <span>Dias</span>
          </DotContainer>
          <NameContainer>
            <span>{patient.name}</span>
            <span>{insurance.name}</span>
          </NameContainer>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Checkbox
            index={checkboxIndex}
            checked={checkbox}
            onClick={handleCheckbox}
          />
        </div>
        <div />
      </div>
    </Container>
  );
};

export default Card;
