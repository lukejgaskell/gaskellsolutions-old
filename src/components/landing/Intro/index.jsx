import { Button, Container } from 'components/common'
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles'
import React, { useContext } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { ThemeContext } from 'providers/ThemeProvider'
import dev from 'assets/illustrations/dev.svg'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Welcome</h1>
          <h4>I’m Luke and I’m a Full Stack Software Engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Luke and I’m a Full Stack Software Engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
