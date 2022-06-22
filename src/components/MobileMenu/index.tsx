import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import { IButtonProps, ILanguageOptionProps, Language } from 'common/types';
import { LANGUAGES, ROUTES } from 'constants/items';
import { IconExit } from 'assets';
import { useLanguage } from 'assets/hooks/useLanguage';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.mobileMenu.background};
  display: flex;
  justify-content: flex-end;
`;

const SideMenu = styled.nav`
  height: 100%;
  width: 65%;
  background-color: ${({ theme }) => theme.menu.background.normal};
`;

const Top = styled.div`
  padding: 40px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LanguageSection = styled.div`
  height: 24px;
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 10px;
  color: ${({ theme }) => theme.menu.text.normal};
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.menu.text.normal};
`;

const Bold = css`
  font-weight: bold;
  color: ${({ theme }) => theme.menu.text.selected};
`;

const LanguageOption = styled.span<ILanguageOptionProps>`
  transition: 0.3s;
  color: ${({ theme }) => theme.menu.text.normal};

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.menu.text.selected};
  }
  ${({ currentLng, lng }) => (currentLng === lng ? Bold : '')};
`;

const IconExitWrapper = styled.button`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.mobileMenu.buttonBg};
  border: 0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 15px;
    width: 15px;
  }
`;

const NavList = styled.ul`
  width: 100%;
  font-size: 21px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  gap: 15px;
`;

const LinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.menu.text.normal};

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.menu.text.selected};
  }
`;

const MobileMenu: FunctionComponent<IButtonProps> = ({
  onClick,
}): JSX.Element => {
  const { changeLanguage, currentLng } = useLanguage();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <SideMenu>
        <Top>
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
          <IconExitWrapper onClick={onClick}>
            <IconExit />
          </IconExitWrapper>
        </Top>
        <NavList>
          {ROUTES.map((link) => (
            <LinkWrapper key={link.title} to={link.href}>
              {t(link.title)}
            </LinkWrapper>
          ))}
        </NavList>
      </SideMenu>
    </Wrapper>
  );
};

export default MobileMenu;
