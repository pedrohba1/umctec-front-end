import ReactSelect from 'react-select';
import styles from './styles';

const Select = ({ ...rest }) => {
  return <ReactSelect styles={styles} {...rest} />;
};

export default Select;
