import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Grid, Paper } from '@material-ui/core';
import * as firebase from 'firebase';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { LOBBY_ADMIN, HOME } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import { configuracionSorteo, identificarSorteoId } from '../actions/sorteo';

import useStyles from './styles';

const uuidv4 = require('uuid/v4');

const Sorteo = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);
  const handleData = useCallback(data => dispatch(configuracionSorteo(data)), [
    dispatch
  ]);
  const classes = useStyles();

  const onSubmit = async data => {
    const idNueva = uuidv4();

    data.id = idNueva;
    data.estado = 'pendiente';

    // const { status } = await jsonApi().crearSorteo(data);

    const fire = firebase
      .database()
      .ref(`sorteo/${data.id}`)
      .set(
        {
          id: data.id,
          nombre: data.nombre,
          nombre_sorteo: data.nombre_sorteo,
          estado: data.estado
        },
        error => {
          if (error) {
            console.log('Falló', error);
          } else {
            dispatch(identificarSorteoId(data.id));
            dispatch(push(LOBBY_ADMIN));
          }
        }
      );

    console.log('firebase', fire);

    // if (status === 200) {
    //   dispatch(identificarSorteoId(data.id));
    //   dispatch(push(LOBBY_ADMIN));
    // }

    handleData(data);
  };

  return (
    <div>
      <Header />
      <Fragment>
        <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
          <Container className={classes.container} maxWidth={false}>
            <Grid className={classes.grid}>
              <Paper className={classes.paperForm}>
                <DialogTitle id='form-dialog-title'>
                  Configuración Sorteo
                </DialogTitle>

                <TextField
                  className={classes.item}
                  autoFocus
                  margin='dense'
                  id='firstName'
                  name='nombre'
                  label='Nombre Creador '
                  type='text'
                  //   defaultValue={open.first}
                  fullWidth
                  inputRef={register({
                    required: true,
                    maxLength: 50,
                    minLength: 1
                  })}
                  variant='outlined'
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <span>First name is required.</span>
                )}
                <TextField
                  className={classes.item}
                  autoFocus
                  margin='dense'
                  id='firstName'
                  name='nombre_sorteo'
                  label='Nombre Sorteo'
                  type='text'
                  fullWidth
                  inputRef={register({
                    required: true,
                    maxLength: 50,
                    minLength: 1
                  })}
                  variant='outlined'
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <span>First name is required.</span>
                )}

                <Button
                  className={classes.item}
                  type='submit'
                  color='primary'
                  variant='contained'
                >
                  Guardar
                </Button>
                <Button
                  className={classes.item}
                  type='submit'
                  color='green'
                  variant='contained'
                  onClick={handleNavigate(HOME)}
                >
                  Volver
                </Button>
              </Paper>
            </Grid>
          </Container>
        </form>
      </Fragment>
      <Footer />
    </div>
  );
};

export default Sorteo;
