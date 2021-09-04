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
      ...provided
    };
  },
  option: (provided) => ({
    ...provided
  }),
  menu: (provided) => ({
    ...provided
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #8b98ba',
    backgroundColor: 'none',
    boxShadow: 'none'
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 'lighter',
    fontSize: '1rem'
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 'lighter',
    fontSize: '1rem'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: '0px'
  })
};

export default Styles;
