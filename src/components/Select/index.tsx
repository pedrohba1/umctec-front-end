import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps
} from 'react-select';
import styles from './styles';

interface Props extends SelectProps<OptionTypeBase> {}

const Select = ({ ...rest }: Props) => {
  return <ReactSelect styles={styles} {...rest} />;
};

export default Select;
