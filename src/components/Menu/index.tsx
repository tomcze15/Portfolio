import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import {
  IHeaderStyleProps,
  ILanguageOptionProps,
  Language,
} from 'common/types';
import { MEDIA, LANGUAGES, ROUTES } from 'constants/items';
import useMenu from './useMenu';
import Button from 'components/Button';
import { useLanguage } from 'assets/hooks/useLanguage';

const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

const ItemCommonBehavoiur = css`
  color: ${({ theme }) => theme.menu.text.normal};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.menu.text.hover};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.menu.text.selected};
  }
`;

const WrapperMain = styled.header<IHeaderStyleProps>`
  width: 100%;
  height: ${({ isFixed }) => (isFixed ? '90' : '150')}px;
  background-color: ${({ isFixed, theme }) =>
    isFixed ? theme.menu.background : 'transparent'};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  transition: 0.5s;
`;

const ContaierMain = styled.nav`
  width: 1400px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  ${flexCenter}
`;

const ListContainer = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  ${flexCenter}
  ${MEDIA.XL} {
    gap: 20px;
  }
  ${MEDIA.XXL} {
    gap: 60px;
  }
  list-style-type: none;
`;

const ListItemWrapper = styled.li`
  height: 100%;
  width: 100%;
  white-space: nowrap;
  display: flex;
  ${flexCenter}
`;

const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  transition: 0.3s;
  ${ItemCommonBehavoiur}
`;

const LanguageSection = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.menu.text.normal};
`;

const Bold = css`
  font-weight: bold;
  color: ${({ theme }) => theme.menu.text.selected};
`;

const LanguageOption = styled.span<ILanguageOptionProps>`
  color: ${({ theme }) => theme.menu.text.normal};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.menu.text.hover};
  }

  ${({ currentLng, lng }) => (currentLng === lng ? Bold : '')};
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.menu.text.normal};
`;

const ButtonSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Menu: FunctionComponent = (): JSX.Element => {
  const { fixedMenu } = useMenu();
  const { changeLanguage, currentLng } = useLanguage();

  const { t } = useTranslation();

  return (
    <WrapperMain isFixed={fixedMenu}>
      <ContaierMain>
        <LanguageSection>
          <LanguageOption
            lng={Language.PL}
            currentLng={currentLng()}
            onClick={() => changeLanguage(Language.PL)}
          >
            {LANGUAGES.PL.shortcut.toUpperCase()}
          </LanguageOption>
          <Divider />
          <LanguageOption
            lng={Language.EN}
            currentLng={currentLng()}
            onClick={() => changeLanguage(Language.EN)}
          >
            {LANGUAGES.EN.shortcut.toUpperCase()}
          </LanguageOption>
        </LanguageSection>
        <ListContainer>
          {ROUTES.map(({ title, href }) => (
            <ListItemWrapper key={title}>
              <NavLinkWrapper to={href}>{t(title)}</NavLinkWrapper>
            </ListItemWrapper>
          ))}
        </ListContainer>
        <ButtonSection>
          <Button>{t('BUTTON.LONG')}</Button>
        </ButtonSection>
      </ContaierMain>
    </WrapperMain>
  );
};

export default Menu;
