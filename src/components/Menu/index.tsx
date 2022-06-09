import { IHeaderStyleProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { MEDIA } from 'constants/items';
import useMenu from './useMenu';
import { NavLink } from 'react-router-dom';

const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

const WrapperMain = styled.header<IHeaderStyleProps>`
  width: 100%;
  height: ${({ isFixed }) => (isFixed ? '90' : '150')}px;
  background-color: ${({ isFixed, theme }) =>
    isFixed ? theme.menu.background : 'transparent'};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
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
  color: ${({ theme }) => theme.menu.text.normal};
  &:hover {
    color: ${({ theme }) => theme.menu.text.hover};
    cursor: pointer;
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.menu.text.selected};
  }
`;

const LanguageSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ButtonSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Menu: FunctionComponent = (): JSX.Element => {
  const { items, fixedMenu } = useMenu();

  return (
    <WrapperMain isFixed={fixedMenu}>
      <ContaierMain>
        <LanguageSection />
        <ListContainer>
          {items.map(({ title, href }) => (
            <ListItemWrapper key={title}>
              <NavLinkWrapper to={href}>{title}</NavLinkWrapper>
            </ListItemWrapper>
          ))}
        </ListContainer>
        <ButtonSection />
      </ContaierMain>
    </WrapperMain>
  );
};

export default Menu;
