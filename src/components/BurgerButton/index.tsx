import { IconBurger } from 'assets';
import { IButtonProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.burgerButton.background};
  border: 0;

  & svg {
    height: 30px;
    width: 30px;
  }
`;

const BurgerButton: FunctionComponent<IButtonProps> = ({
  onClick,
}): JSX.Element => {
  return (
    <Wrapper onClick={onClick}>
      <IconBurger />
    </Wrapper>
  );
};

export default BurgerButton;
