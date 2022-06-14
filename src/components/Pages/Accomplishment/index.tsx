import { Card } from 'components';
import SearchButton from 'components/SearchButton';
import { MEDIA, SKILLS } from 'constants/items';
import { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: fit-content;

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

  const handleInput = (e: string) => {
    setSearchfield(e);
  };

  const filteredSkills = SKILLS.filter((skill) =>
    skill.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <MainWrapper>
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
