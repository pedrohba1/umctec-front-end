import { StylesConfig } from 'react-select';

type IsMulti = false;

type MyOptionType = {
  label: string;
  value: string;
};

const Styles: StylesConfig<MyOptionType, IsMulti> = {
  container: (provided /* state */) => {
    /*     const { label } = state.getValue()[0];
     */ return {
      width: `50%`,
      ...provided,
      border: 'none'
    };
  },
  option: (provided) => ({
    ...provided,
    border: 'none'
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none'
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'none',
    boxShadow: 'none'
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 'lighter',
    fontSize: '1.5rem'
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 'lighter',
    fontSize: '1.5rem'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: '0px'
  })
};

export default Styles;
