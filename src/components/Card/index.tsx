import { Card as Props } from '@hooks/calls/activity/useGetCards';
import Container from './styles';

const Card = (props: Props) => {
  const { daysSinceCreated } = props;
  return (
    <Container>
      <div>
        {daysSinceCreated}
        <h2>card</h2>
      </div>
    </Container>
  );
};

export default Card;
