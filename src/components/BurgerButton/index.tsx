import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IconBurger } from 'assets';
import { IButtonProps } from 'common/types';
import { MEDIA } from 'constants/items';

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

    ${MEDIA.L} {
      height: 20px;
      width: 20px;
    }
  }

  ${MEDIA.L} {
    height: 40px;
    width: 40px;
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
