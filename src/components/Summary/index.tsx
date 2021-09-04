import useGetSummary from '@hooks/calls/activity/useGetSummary';
import Container, { Dot, DotContainer } from './styles';

const Summary = ({ id }) => {
  const {
    data: { totalCardsDelayed, totalCardsOk, totalCardsWarning, total },
    status
  } = useGetSummary(id);

  if (status === 'success') {
    return (
      <Container>
        <DotContainer>
          <div>
            <Dot color="#fd5958" />
            <span>{`${totalCardsDelayed} cards`}</span>
          </div>
          <div>
            <Dot color="#ffc734" />
            <span>{`${totalCardsWarning} cards`}</span>
          </div>
          <div>
            <Dot color="#20bf6b" />
            <span>{`${totalCardsOk} cards`}</span>
          </div>
        </DotContainer>
        <span>{`total: ${total}`}</span>
      </Container>
    );
  }
  return <> </>;
};
export default Summary;
