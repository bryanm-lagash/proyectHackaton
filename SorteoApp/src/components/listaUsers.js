import React from 'react';
import { Container, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as firebase from 'firebase';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';
import { setUserList } from '../actions/sorteo';

firebase.initializeApp(window.firebaseConfig);

const ListaUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userList, idSorteo } = useSelector(({ sorteo }) => sorteo);

  // console.log('dataform ', userList);
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
          // console.log(
          //   'listausers',
          //   Object.values(users),
          //   'idSorteo:',
          //   idSorteo
          // );
        }
      });
    // const { data } = await jsonApi().getUsers();
  });

  // if (userList === undefined) {
  //   return <div />;
  // }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid
          style={{
            gridTemplateColumns: '1fr 1fr 1fr',
            display: 'Grid',
            margin: 'auto'
          }}
          className={classes.List}
          item
          xs={6}
        >
          {Object.values(userList).map(({ nombre }) => (
            <ListItem className={classes.List} key={nombre}>
              <ListItem alignItems='flex-start'>
                <Paper className='paper'>
                  <ListItemText className='icono' primary={`${nombre}`} />
                </Paper>
              </ListItem>
            </ListItem>
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className='caja container'>
      <div className='cart2 class="row">'>
        <Container className='raduis col-md-4'>
          <div style={{ textAlign: 'center' }}>
            <font className='titulo' face='Roboto' size=' 7'>
              Lista de Usuarios
              <p className='numeroParticipantes'>{`Numero de participantes ${userList.length}`}</p>
            </font>
            <Container className={classes.container} maxWidth={false}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <FormRow />
                  </Grid>
                </Grid>
              </div>
              <br />
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ListaUsers;
