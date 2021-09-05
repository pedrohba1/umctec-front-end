import { CheckboxContainer, StyledCheckbox } from './styles';

const CheckAll = ({ state, onCheckAll }) => (
  <CheckboxContainer>
    <StyledCheckbox checked={state} onClick={() => onCheckAll()} />
  </CheckboxContainer>
);

export default CheckAll;
