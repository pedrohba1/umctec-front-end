import { StylesConfig } from 'react-select';

type IsMulti = false;

type MyOptionType = {
  label: string;
  value: string;
};

const Styles: StylesConfig<MyOptionType, IsMulti> = {
  container: (provided) => ({
    ...provided,
    border: 'none'
  }),
  option: (provided) => ({
    ...provided,
    border: 'none'
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none'
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'none',
    boxShadow: 'none'
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 'lighter',
    fontSize: '2em'
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 'lighter',
    fontSize: '2em'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: '0px'
  })
};

export default Styles;
