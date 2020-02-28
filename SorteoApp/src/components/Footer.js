import React from 'react';
import { Button, Container } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import LogoBlanco from '../resources/Logo_Blanco.png';

const Footer = () => (
  <BottomNavigation
    style={{
      backgroundColor: '#3f51b5',
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0
    }}
  >
    <Container maxWidth='sm'>
      <Button href='https://www.lagash.com/'>
        <img
          src={LogoBlanco}
          style={{ position: 'fixed', right: 0, bottom: 0 }}
          alt='LogoBlanco'
        />{' '}
      </Button>
    </Container>
  </BottomNavigation>
);

export default Footer;
