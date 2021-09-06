import { Card as CardData } from '@hooks/calls/activity/useGetCards';
import Checkbox from '@components/Checkbox';
import Container, {
  DotContainer,
  NameContainer,
  TopContainer,
  MiddleContainer,
  BillItem,
  ValueContainer,
  PendencyContainer,
  Document,
  Attachment,
  BillContainer
} from './styles';

interface Props {
  checkboxIndex: number;
  card: CardData;
  checkbox: boolean;
  handleCheckbox: Function;
}

const Card = (props: Props) => {
  const {
    card: {
      daysSinceCreated,
      slaStatus,
      patient,
      insurance,
      bill,
      totalAmount,
      numberOfOpenPendencies
    },
    checkbox,
    handleCheckbox,
    checkboxIndex
  } = props;
  return (
    <Container>
      <TopContainer>
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
      </TopContainer>
      <BillContainer>
        <BillItem>
          <span>Attend.</span>
          <span>{bill.attendance}</span>
        </BillItem>
        <BillItem>
          <span>Conta</span>
          <span>{bill.account}</span>
        </BillItem>
        <BillItem>
          <span>Remessa</span>
          <span>{bill.shipping}</span>
        </BillItem>
        <BillItem>
          <span>Lote</span>
          <span>{bill.batch}</span>
        </BillItem>
      </BillContainer>
      <ValueContainer>
        <span>{`R$ ${totalAmount}`}</span>
        <PendencyContainer>
          <span>{`${numberOfOpenPendencies} pendências`}</span>
        </PendencyContainer>
      </ValueContainer>
      <MiddleContainer>
        <div>
          <span>{bill.billType}</span>
        </div>
        <div>
          <Document />
          <Attachment />
        </div>
      </MiddleContainer>
    </Container>
  );
};

export default Card;
