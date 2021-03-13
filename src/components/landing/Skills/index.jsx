import { Button, Container } from 'components/common';
import { Details, SkillsWrapper, Thumbnail, Wrapper } from './styles';
import React, { useContext } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import dev from 'assets/illustrations/skills.svg';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I'm interested in creating technology that changes the way we think about world problems.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
