import { IconExit } from 'assets';
import { IButtonProps } from 'common/types';
import { ROUTES } from 'constants/items';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
`;

const SideMenu = styled.nav`
  height: 100%;
  width: 65%;
  background-color: ${({ theme }) => theme.menu.background.normal};
`;

const ExitWprapper = styled.div`
  padding: 40px 40px 0 0;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const IconExitWrapper = styled.button`
  height: 60px;
  width: 60px;
  background-color: #c9ada7;
  border: 0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 30px;
    width: 30px;
  }
`;

const NavList = styled.ul`
  width: 100%;
  padding: 60px;
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
  return (
    <Wrapper>
      <SideMenu>
        <ExitWprapper>
          <IconExitWrapper onClick={onClick}>
            <IconExit />
          </IconExitWrapper>
        </ExitWprapper>
        <NavList>
          {ROUTES.map((link) => (
            <LinkWrapper key={link.title} to={link.href}>
              {link.title}
            </LinkWrapper>
          ))}
        </NavList>
      </SideMenu>
    </Wrapper>
  );
};

export default MobileMenu;
