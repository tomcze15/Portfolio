import { IconBurger } from 'assets';
import { IBurgerButtonProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.burgerButton.background};
  border: 0;
`;

const BurgerButton: FunctionComponent<IBurgerButtonProps> = ({
  onClick,
}): JSX.Element => {
  return (
    <Wrapper onClick={onClick}>
      <IconBurger />
    </Wrapper>
  );
};

export default BurgerButton;
