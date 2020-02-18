import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Grid, Paper } from '@material-ui/core';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { LOBBY_ADMIN, HOME } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import { configuracionSorteo } from '../actions/sorteo';

import useStyles from './styles';

const Sorteo = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);
  const handleData = useCallback(data => dispatch(configuracionSorteo(data)), [
    dispatch
  ]);

  const onSubmit = async data => {
    console.log(data);
    // const indice = datosApi.findIndex(element => element.email === nameObject);
    const { status } = await jsonApi().setSorteo(data);

    console.log(status);

    if (status === 200) {
      dispatch(push(LOBBY_ADMIN));
    }

    handleData(data);
  };

  const classes = useStyles();

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
                  inputRef={register({ required: true, maxLength: 50 })}
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
                  inputRef={register({ required: true, maxLength: 50 })}
                  variant='outlined'
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <span>First name is required.</span>
                )}

                <TextField
                  className={classes.item}
                  id='minimo'
                  label='Mínimo participantes'
                  name='minimo'
                  type='number'
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputRef={register({ required: true, maxLength: 5 })}
                  fullWidth
                  variant='outlined'
                />
                {errors.minimo && errors.minimo.type === 'required' && (
                  <span role='alert'>Minimo de participantes requerido.</span>
                )}
                <TextField
                  className={classes.item}
                  id='minimoParticipantes'
                  label='Número ganadores'
                  type='number'
                  name='seleccionados'
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputRef={register({ required: true, maxLength: 5 })}
                  fullWidth
                  variant='outlined'
                />
                {errors.minimo && errors.minimo.type === 'required' && (
                  <span role='alert'>Minimo de participantes requerido.</span>
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
    </div>
  );
};

export default Sorteo;
