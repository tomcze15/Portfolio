import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { IconDownload } from 'assets';
import { INavButtonProps } from 'common/types';

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
    -webkit-box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.button.shadow};
    -moz-box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.button.shadow};
    box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.button.shadow};
  }

  & svg {
    width: 30px;
    height: 30px;
  }
`;

const Button: FunctionComponent<INavButtonProps> = ({
  children,
  pathToDownload,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ButtonWrapper href={pathToDownload} target="_blank" download>
      {children}
      <IconDownload title={t('ICONS.DOWNLOAD')} />
    </ButtonWrapper>
  );
};

export default Button;
