import { MEDIA } from 'constants/items';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 300px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;

  ${MEDIA.S} {
    padding-top: 50px;
    font-size: 26px;
  }
`;

const Page404: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();
  return <Wrapper>{t('page404')}</Wrapper>;
};

export default Page404;
