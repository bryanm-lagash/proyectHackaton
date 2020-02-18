import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { updateUser } from '../actions/counter';

const FormDialog = props => {
  // const [open, setOpen] = React.useState(true);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const { open, nameObject } = props;
  const { datosApi } = useSelector(({ counter }) => counter);

  const handleClose = () => {
    props.onClose();
  };

  const handleUpdate = useCallback(index => dispatch(updateUser(index)), [
    dispatch
  ]);

  const onSubmit = (data, e) => {
    const indice = datosApi.findIndex(element => element.email === nameObject);

    handleUpdate({ data, indice });
    handleClose();
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id='form-dialog-title'>Actualizar Datos</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='firstName'
              name='firstName'
              label='First Name'
              type='text'
              defaultValue={open.first}
              fullWidth
              inputRef={register({ required: true, maxLength: 50 })}
            />
            {errors.firstName && errors.firstName.type === 'required' && (
              <span>First name is required.</span>
            )}

            <TextField
              autoFocus
              margin='dense'
              id='lastName'
              name='lastName'
              label='Last Name'
              type='text'
              defaultValue={open.last}
              fullWidth
              inputRef={register({ required: true, maxLength: 50 })}
            />
            {errors.lastName && errors.lastName.type === 'required' && (
              <span role='alert'>Last name is required.</span>
            )}
            <TextField
              autoFocus
              margin='dense'
              id='email'
              name='email'
              label='Email'
              type='email'
              fullWidth
              defaultValue={nameObject}
              inputRef={register({
                required: 'required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address'
                }
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span>Email is required.</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span>Enter a valid email.</span>
            )}
          </DialogContent>
          <DialogActions>
            <Button type='submit' color='primary'>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};

export default FormDialog;
