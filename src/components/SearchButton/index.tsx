import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { IInputProps } from 'common/types';

const Input = styled.input`
  height: 80px;
  width: 300px;
  border-radius: 50px;
  background-color: #f2e9e4;
  border: 0;
  font-size: 24px;
  padding: 0 30px 0 70px;
  color: #22223b;

  &:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 19px -2px rgba(34, 34, 59, 1);
    -moz-box-shadow: inset 0px 0px 19px -2px rgba(34, 34, 59, 1);
    box-shadow: inset 0px 0px 19px -2px rgba(34, 34, 59, 1);
  }

  ::placeholder {
    color: #c9ada7;
  }
`;

const SearchButton: FunctionComponent<IInputProps> = ({ onChange }) => {
  const { t } = useTranslation();

  return (
    <Input
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      type="search"
      placeholder={t('SEARCHBUTTON.PLACEHOLDER')}
    ></Input>
  );
};

export default SearchButton;
