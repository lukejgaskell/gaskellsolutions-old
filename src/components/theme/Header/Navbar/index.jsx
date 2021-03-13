import { Brand, Wrapper } from './styles';
import React, { useContext } from 'react';

import { Container } from 'components/common';
import { Link } from 'gatsby';
import NavbarLinks from '../NavbarLinks';
import { ThemeContext } from 'providers/ThemeProvider';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        GaskellSolutions
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
