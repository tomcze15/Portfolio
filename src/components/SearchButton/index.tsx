import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { IInputProps } from 'common/types';
import { IconMagnifier } from 'assets';

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
`;

const WrapperIcon = styled.div`
  position: absolute;
  transform: translate(30px, 20px);

  & svg {
    height: 40px;
    width: 40px;
  }
`;

const Input = styled.input`
  height: 80px;
  width: 300px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.searchButton.background};
  border: 0;
  font-size: 24px;
  padding: 0 30px 0 85px;
  color: ${({ theme }) => theme.searchButton.text};
  transition: all 0.2s ease-in;

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 19px -2px ${({ theme }) => theme.searchButton.shadow};
    -moz-box-shadow: inset 0px 0px 19px -2px ${({ theme }) => theme.searchButton.shadow};
    box-shadow: inset 0px 0px 19px -2px ${({ theme }) => theme.searchButton.shadow};
  }

  ::placeholder {
    color: ${({ theme }) => theme.searchButton.placeholder};
  }
`;

const SearchButton: FunctionComponent<IInputProps> = ({ onChange }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <WrapperIcon>
        <IconMagnifier />
      </WrapperIcon>
      <Input
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        type="search"
        placeholder={t('SEARCHBUTTON.PLACEHOLDER')}
      ></Input>
    </Wrapper>
  );
};

export default SearchButton;
