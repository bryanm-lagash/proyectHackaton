import React, { useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import * as firebase from 'firebase';

import { LOBBY_ADMIN, HOME } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import Header from '../components/Header';

import Error from './Error';
import useStyles from './styles';

const uuidv4 = require('uuid/v4');

function FormFutbol() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSubmit = async data => {
    // const { nombreCreador, nombreSorteo, equipoUno, equipoDos } = data;

    const idNueva = uuidv4();

    data.id = idNueva;

    // const { status } = await jsonApi().crearSorteoFutbol(data);

    firebase
      .database()
      .ref(`sorteoFutbol/${data.id}`)
      .set(
        {
          id: data.id,
          nombreSorteo: data.nombreSorteo,
          nombreCreado: data.nombreCreador,
          equipoUno: data.equipoUno,
          equipoDos: data.equipoDos,
          estado: 'pendiente'
        },
        error => {
          error
            ? console.log('Error Firebase', error)
            : dispatch(push(LOBBY_ADMIN));

          // if (error) {
          // } else {
          //   dispatch(push(LOBBY_ADMIN));
          // }
        }
      );
  };

  return (
    <div>
      <Header />
      <Container className={classes.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid className={classes.grid2}>
            <Paper className={classes.paperForm}>
              <DialogTitle id='form-dialog-title'>
                Configuración Formulario Futbol
              </DialogTitle>
              {errors.nombreCreador &&
                errors.nombreCreador.type === 'required' && <Error />}
              <TextField
                className={classes.item}
                type='text'
                name='nombreCreador'
                id='importante'
                autoFocus
                label='Nombre Creador '
                margin='dense'
                fullWidth
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  minLength: 1
                })}
                variant='outlined'
              />
              {errors.nombreSorteo &&
                errors.nombreSorteo.type === 'required' && <Error />}
              <TextField
                className={classes.item}
                type='text'
                id='importante'
                name='nombreSorteo'
                autoFocus
                label='Nombre Sorteo '
                fullWidth
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  minLength: 1
                })}
                variant='outlined'
              />
              {errors.equipoUno && errors.equipoUno.type === 'required' && (
                <Error />
              )}
              <TextField
                className={classes.item}
                type='text'
                id='importante'
                name='equipoUno'
                autoFocus
                label='Nombre Equipo 1 '
                fullWidth
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  minLength: 1
                })}
                variant='outlined'
              />
              {errors.equipoDos && errors.equipoDos.type === 'required' && (
                <Error />
              )}
              <TextField
                className={classes.item}
                type='text'
                name='equipoDos'
                autoFocus
                id='importante'
                label='Nombre Equipo 2 '
                fullWidth
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  minLength: 1
                })}
                variant='outlined'
              />
              <Button
                className={classes.item}
                type='submit'
                color='primary'
                variant='contained'
                fullWidth
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  minLength: 1
                })}
                variant='outlined'
              >
                Guardar
              </Button>
            </Paper>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default FormFutbol;
