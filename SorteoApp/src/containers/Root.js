import React, { useCallback } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { HOME } from '../routes/paths';

import useStyles from './styles';

const Root = () => {
  //   const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Container maxWidth={false}>
        <h1>Pestaña principal administardor</h1>
        <h1>LAGASH</h1>
        <Button
          color='primary'
          variant='contained'
          onClick={handleNavigate(HOME)}
        >
          Start
        </Button>
      </Container>
    </div>
  );
};

export default Root;
