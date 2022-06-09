import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { IHeaderStyleProps } from 'common/types';
import { LANGUAGE, MEDIA } from 'constants/items';
import useMenu from './useMenu';

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
  width: fit-content;
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

  & span {
    ${ItemCommonBehavoiur}
  }
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
`;

const Menu: FunctionComponent = (): JSX.Element => {
  const { items, fixedMenu } = useMenu();
  const { t, i18n } = useTranslation();

  // i18n.changeLanguage(LANGUAGE.PL.shortcut);

  return (
    <WrapperMain isFixed={fixedMenu}>
      <ContaierMain>
        <LanguageSection>
          <span>{LANGUAGE.PL.shortcut.toUpperCase()}</span>
          <Divider />
          <span>{LANGUAGE.EN.shortcut.toUpperCase()}</span>
        </LanguageSection>
        <ListContainer>
          {items.map(({ title, href }) => (
            <ListItemWrapper key={title}>
              <NavLinkWrapper to={href}>{t(title)}</NavLinkWrapper>
            </ListItemWrapper>
          ))}
        </ListContainer>
        <ButtonSection />
      </ContaierMain>
    </WrapperMain>
  );
};

export default Menu;
