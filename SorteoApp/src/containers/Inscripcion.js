import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Grid, Paper } from '@material-ui/core';

import useMount from '../hooks/useMount';
import { LOBBY } from '../routes/paths';
import Header from '../components/Header';
import InfoSorteo from '../components/InfoSorteo';
import jsonApi from '../services/jsonApi';
import { identificarSorteoId } from '../actions/sorteo';

import useStyles from './styles';

const uuidv4 = require('uuid/v4');

const Inscripcion = props => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { idSorteo } = useSelector(({ sorteo }) => sorteo);

  useMount(() => {
    console.log(props.match.params);
    dispatch(identificarSorteoId(props.match.params.id));
  });

  const onSubmit = async data => {
    const idNueva = uuidv4();

    data.id = idNueva;
    data.idSorteo = idSorteo;

    const { status } = await jsonApi().addUsers(data);

    if (status === 200) {
      dispatch(push(LOBBY));
    }
  };

  const classes = useStyles();

  if (idSorteo === '') {
    return (
      <div>
        <Header />
        <Fragment>
          <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
            <Container className={classes.container} maxWidth={false}>
              <Grid className={classes.grid}>
                <Paper className={classes.paperForm}>
                  <DialogTitle id='form-dialog-title'>
                    <InfoSorteo />
                  </DialogTitle>

                  <TextField
                    autoFocus
                    margin='dense'
                    id='firstName'
                    name='nombre'
                    label='Usuario Participante '
                    type='text'
                    //   defaultValue={open.first}
                    fullWidth
                    inputRef={register({ required: true, maxLength: 50 })}
                    variant='outlined'
                  />

                  <Button type='submit' color='primary' variant='contained'>
                    Save
                  </Button>
                </Paper>
              </Grid>
            </Container>
          </form>
        </Fragment>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Fragment>
        <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
          <Container className={classes.container} maxWidth={false}>
            <Grid className={classes.grid}>
              <Paper className={classes.paperForm}>
                <DialogTitle id='form-dialog-title'>
                  <InfoSorteo />
                </DialogTitle>

                <TextField
                  autoFocus
                  margin='dense'
                  id='firstName'
                  name='nombre'
                  label='Usuario Participante '
                  type='text'
                  //   defaultValue={open.first}
                  fullWidth
                  inputRef={register({ required: true, maxLength: 50 })}
                  variant='outlined'
                />

                <Button type='submit' color='primary' variant='contained'>
                  Save
                </Button>
              </Paper>
            </Grid>
          </Container>
        </form>
      </Fragment>
    </div>
  );
};

export default Inscripcion;
