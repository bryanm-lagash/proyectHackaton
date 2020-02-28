import React from 'react';
import { Container, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
import useStyles from '../containers/styles';
import { setUserList } from '../actions/sorteo';
import './ListaUsers.css';

firebase.initializeApp(window.firebaseConfig);

const ListaUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userList, idSorteo } = useSelector(({ sorteo }) => sorteo);

  useMount(async () => {
    firebase
      .database()
      .ref('users/add/')
      .orderByChild('idSorteo')
      .equalTo(idSorteo)
      .on('value', snap => {
        const users = snap.val();

        if (users !== null) {
          dispatch(setUserList(Object.values(users)));
        }
      });
  });

  function FormRow() {
    return (
      <React.Fragment>
        <Grid
          className='GridListUsers'
          // item
          // xs={10}
          // sm={10}
          // md={10}
          // lg={10}
          // xl={10}
        >
          {Object.values(userList).map(({ nombre }) => (
            <ListItem className={classes.List} key={nombre}>
              <ListItem alignItems='flex-start'>
                <Paper className='paper'>
                  <ListItemText className='icono' primary={nombre} />
                </Paper>
              </ListItem>
            </ListItem>
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Container className='raduis'>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ paddingTop: '20px', color: 'white', fontSize: '38px' }}>
          Lista de Usuarios
        </h2>
        <p className='numeroParticipantes'>{`Numero de participantes: ${userList.length}`}</p>
      </div>
      <FormRow />
    </Container>
  );
};

export default ListaUsers;
