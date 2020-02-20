import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import { goBack } from 'connected-react-router';
import Paper from '@material-ui/core/Paper';

import { configuracionSorteo } from '../actions/sorteo';
import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const InfoSorteo = () => {
  const classes = useStyles();

  const [sorteos, setSorteos] = useState([]);

  useMount(async () => {
    const data = await jsonApi().getSorteo();

    setSorteos(data.data);
  });

  if (sorteos === undefined) {
    return <div />;
  }

  return (
    <Container className={classes. } maxWidth={false}>
      {Object.values(sorteos).map((sorteo, i) => {
        if (sorteo.id === '47f46380-2cb6-4692-8fe8-84cffe4c0b9a') {
          return (
            <div>
              <h2>{sorteo.nombre_sorteo}</h2>
              <h5>{sorteo.nombre}</h5>
              <p>{sorteo.id}</p>
            </div>
          );
        }
      })}
      {/* <div className={classes.List}>
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
      </div> */}
    </Container>
  );
};

export default InfoSorteo;
