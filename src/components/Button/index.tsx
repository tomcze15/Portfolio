import { IconDownload } from 'assets';
import { IButtonProps } from 'common/types';
import { CV_TITLE } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  height: 60px;
  width: 217px;
  padding: 30px 20px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  font-size: 24px;

  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.text};
  cursor: pointer;

  text-decoration: none;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.button.hoverBg};
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
