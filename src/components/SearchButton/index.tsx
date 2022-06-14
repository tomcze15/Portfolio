import { IInputProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
  height: 80px;
  width: 300px;
  border-radius: 50px;
  background-color: white;
  border: 0;
  font-size: 24px;
  padding: 0 30px 0;
  color: #22223b;

  &:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 19px -2px rgba(34, 34, 59, 1);
    -moz-box-shadow: inset 0px 0px 19px -2px rgba(34, 34, 59, 1);
    box-shadow: inset 0px 0px 19px -2px rgba(34, 34, 59, 1);
  }
`;

const SearchButton: FunctionComponent<IInputProps> = ({ onChange }) => {
  return (
    <Wrapper
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      type="search"
    ></Wrapper>
  );
};

export default SearchButton;
