import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Card, SearchButton, PageTitle } from 'components';
import { MEDIA, SKILLS } from 'constants/items';
import { useTranslation } from 'react-i18next';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  padding-bottom: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const GridSkills = styled.div`
  width: fit-content;
  display: grid;
  gap: 50px;

  grid-template-columns: repeat(4, 1fr);

  ${MEDIA.XXL} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${MEDIA.XL} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${MEDIA.M} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Accomplishment: FunctionComponent = (): JSX.Element => {
  const [searchfield, setSearchfield] = useState<string>('');
  const { t } = useTranslation();

  const handleInput = (e: string) => {
    setSearchfield(e);
  };

  const filteredSkills = SKILLS.filter((skill) =>
    skill.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <MainWrapper>
      <PageTitle title={t('SKILLS')} />
      <SearchButton onChange={handleInput} />
      <GridSkills>
        {filteredSkills.map((skill) => (
          <Card key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </GridSkills>
    </MainWrapper>
  );
};

export default Accomplishment;
