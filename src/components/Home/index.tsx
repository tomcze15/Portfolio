import Box from 'components/Box';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const MainWrapper = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1400px;
`;

const ParagraphWrapper = styled.p`
  font-size: 21px;
  color: ${({ theme }) => theme.text};
`;

const Home: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
      <Box>
        <ParagraphWrapper>{t('ABOUT_ME.P1')}</ParagraphWrapper>
        <ParagraphWrapper>{t('ABOUT_ME.P2')}</ParagraphWrapper>
        <ParagraphWrapper>{t('ABOUT_ME.P3')}</ParagraphWrapper>
      </Box>
    </MainWrapper>
  );
};

export default Home;
