import { IconDownload } from 'assets';
import { IButtonProps } from 'common/types';
import { CV_TITLE } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  height: 60px;
  width: fit-content;
  padding: 30px 20px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  font-size: 22px;
  transition: 0.2s;

  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.text};
  cursor: pointer;

  text-decoration: none;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.button.hoverBg};
    -webkit-box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 1);
  }

  & svg {
    width: 30px;
    height: 30px;
  }
`;

const Button: FunctionComponent<IButtonProps> = ({
  children,
  pathToDownload,
}): JSX.Element => {
  console.log('href', pathToDownload);
  return (
    <ButtonWrapper href={pathToDownload + CV_TITLE} target="_blank" download>
      {children}
      <IconDownload />
    </ButtonWrapper>
  );
};

export default Button;
