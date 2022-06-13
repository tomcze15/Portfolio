import Box from 'components/Box';
import { CONTACTS } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 44px;
  gap: 100px;
  max-width: 1400px;
  padding-bottom: 750px;
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 50px;
  img {
    height: 80px;
    width: 80px;
  }
`;

const Contact: FunctionComponent = (): JSX.Element => {
  return (
    <MainWrapper>
      {CONTACTS.map(({ icon, text }) => (
        <Box>
          <ContactContainer>
            <img src={icon} />
            <span>{text}</span>
          </ContactContainer>
        </Box>
      ))}
    </MainWrapper>
  );
};

export default Contact;
