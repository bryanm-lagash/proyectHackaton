import React from 'react';
import { Button, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../resources/Logo.png';

const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <Container maxWidth='sm'>
        <Button
          href='https://www.lagash.com/'
          style={{ position: 'fixed', left: 20, height: 30, top: 15 }}
        >
          <img src={Logo} />
        </Button>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
