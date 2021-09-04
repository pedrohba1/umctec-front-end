import useGetSummary from '@hooks/calls/activity/useGetSummary';
import Container, { Dot } from './styles';

const Summary = ({ id }) => {
  const {
    data: { totalCardsDelayed, totalCardsOk, totalCardsWarning },
    status
  } = useGetSummary(id);

  if (status === 'success') {
    return (
      <Container>
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
      </Container>
    );
  }
  return <> </>;
};
export default Summary;
