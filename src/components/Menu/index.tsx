import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import {
  IHeaderStyleProps,
  ILanguageOptionProps,
  Language,
} from 'common/types';
import { MEDIA, LANGUAGES, ROUTES, CV_PATH } from 'constants/items';
import useMenu from './useMenu';
import { Button, BurgerButton } from 'components';
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

const shadowMenu = css`
  -webkit-box-shadow: 0px 8px 23px 3px ${({ theme }) => theme.menu.shadow};
  -moz-box-shadow: 0px 8px 23px 3px ${({ theme }) => theme.menu.shadow};
  box-shadow: 0px 8px 23px 3px ${({ theme }) => theme.menu.shadow};
`;

const WrapperMain = styled.header<IHeaderStyleProps>`
  width: 100%;
  height: ${({ isFixed }) => (isFixed ? '90' : '150')}px;
  background-color: ${({ isFixed, theme }) =>
    isFixed ? theme.menu.background.normal : theme.menu.background.transparent};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 5;
  transition: 0.5s;

  ${({ isFixed }) => (isFixed ? shadowMenu : '')}
`;

const ContaierMain = styled.nav`
  width: 1400px;
  padding: 0 20px;
  height: 100%;
  font-size: 20px;
  display: flex;
  ${flexCenter}

  ${MEDIA.XL} {
    padding: 0 50px;
  }
`;

const ListContainer = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 60px;
  list-style-type: none;
  ${flexCenter}

  ${MEDIA.XL} {
    gap: 40px;
  }
  ${MEDIA.M} {
    display: none;
  }
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
  font-size: 18px;
  gap: 10px;
  color: ${({ theme }) => theme.menu.text.normal};

  ${MEDIA.XXL} {
    padding-left: 30px;
  }

  ${MEDIA.XL} {
    padding-left: 50px;
  }

  ${MEDIA.M} {
    display: none;
  }
`;

const Bold = css`
  font-weight: bold;
  color: ${({ theme }) => theme.menu.text.selected};
`;

const LanguageOption = styled.span<ILanguageOptionProps>`
  transition: 0.3s;
  ${ItemCommonBehavoiur}
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
  & > button,
  & > a:nth-of-type(2) {
    display: none;
  }

  ${MEDIA.L} {
    & > a:nth-of-type(1) {
      display: none;
    }
    & > a:nth-of-type(2) {
      display: flex;
    }
  }

  ${MEDIA.M} {
    & > a:nth-of-type(2) {
      display: none;
    }
    & > button {
      display: flex;
    }
  }
`;

const Menu: FunctionComponent = (): JSX.Element => {
  const { fixedMenu, mobileMenu } = useMenu();
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
          <Button pathToDownload={CV_PATH}>{t('BUTTON.LONG')}</Button>
          <Button pathToDownload={CV_PATH}>{'CV'}</Button>
          <BurgerButton />
        </ButtonSection>
      </ContaierMain>
    </WrapperMain>
  );
};

export default Menu;
