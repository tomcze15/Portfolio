import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

export const customMediaQuery = (
  maxWidth: number
): FlattenInterpolation<ThemeProps<any>> =>
  css`
    @media (max-width: ${maxWidth}px)
  `;
