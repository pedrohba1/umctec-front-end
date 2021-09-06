import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps
} from 'react-select';
import useWindowDimension from '@hooks/media/useWindowDimension';
import styles from './styles';

interface Props extends SelectProps<OptionTypeBase> {}

const Select = ({ ...rest }: Props) => {
  const { width } = useWindowDimension();

  return <ReactSelect styles={styles} {...rest} width={width} />;
};

export default Select;
