import { CheckboxContainer, StyledCheckbox } from './styles';

const Checkbox = ({ index, checked, onClick }) => (
  <CheckboxContainer>
    <StyledCheckbox checked={checked} onClick={() => onClick(index)} />
  </CheckboxContainer>
);

export default Checkbox;
