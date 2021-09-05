import styled, { css } from 'styled-components';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

type CheckboxProps = {
  checked: boolean;
};

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledCheckbox = styled.div((props: CheckboxProps) => {
  const { checked } = props;
  return css`
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    outline: 2px solid #1f274c;
    background-color: ${checked ? '#627199' : 'none'};
    border-radius: 25%;
    outline-offset: 3px;
    transition: all 150ms;
  `;
});
