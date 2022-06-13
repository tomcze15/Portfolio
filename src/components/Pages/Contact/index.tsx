import { Box } from 'components';
import { CONTACTS } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 44px;
  gap: 100px;
  max-width: 1400px;
  padding-bottom: 750px;
`;

const ContactContainer = styled.div`
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 50px;

  & span {
    color: ${({ theme }) => theme.contact.text};
  }

  & img {
    transition: 0.5s;
    height: 80px;
    width: 80px;
  }

  &:hover {
    transition: 0.5s;
    gap: 40px;
    font-size: 66px;
    & img {
      height: 100px;
      width: 100px;
    }
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
