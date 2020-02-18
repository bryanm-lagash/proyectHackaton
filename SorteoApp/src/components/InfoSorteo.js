import React from 'react';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';
import Paper from '@material-ui/core/Paper';

import { configuracionSorteo } from '../actions/sorteo';
import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const InfoSorteo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { dataForm } = useSelector(({ sorteo }) => sorteo);

  console.log('dataform ', dataForm);
  useMount(async () => {
    const { data } = await jsonApi().getSorteo();

    dispatch(configuracionSorteo(data));
    console.log(data);
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <div className={classes.List}>
        {Array.isArray(dataForm) &&
          dataForm.map(({ nombre_sorteo, minimo_participantes }) => (
            <div
              style={{ textAlign: 'center' }}
              className={classes.List}
              key={nombre_sorteo}
            >
              <font face='Roboto' size=' 7'>
                {nombre_sorteo}
              </font>
              <h1 />
              <Paper elevation={0}>
                <ListItemText
                  primary={`${'Numero minimo de participantes: '} ${minimo_participantes}`}
                />
              </Paper>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default InfoSorteo;
