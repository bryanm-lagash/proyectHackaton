import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const CodeQR = () => {
  const classes = useStyles();

  const { dataForm } = useSelector(({ sorteo }) => sorteo);

  console.log('dataform ', dataForm);
  useMount(async () => {
    const { data } = await jsonApi().getQR();

    console.log(data);
  });

  return (
    <Container
      style={{ textAlign: 'center' }}
      className={classes.container}
      maxWidth={false}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='230'
        height='230'
        viewBox='0 0 33 33'
      >
        <path d='M2 2h7v7h-7zM11 2h1v1h-1zM16 2h1v1h-1zM18 2h1v3h-1v1h-1v-1h-1v-1h1v-1h1zM21 2h1v1h-1zM24 2h7v7h-7zM3 3v5h5v-5zM12 3h1v1h-1zM14 3h2v1h-1v1h-1v1h-2v-1h1v-1h1zM20 3h1v3h1v1h-2v1h-1v-1h-1v-1h1v-1h1zM25 3v5h5v-5zM4 4h3v3h-3zM10 4h1v3h1v1h-1v1h1v-1h1v2h-3zM26 4h3v3h-3zM22 5h1v1h-1zM14 6h2v1h2v1h-1v1h-1v-1h-1v1h1v1h-1v5h-2v-1h1v-6h-1v-1h1zM18 8h1v2h1v1h-1v1h-1v-1h-2v-1h1v-1h1zM20 8h1v1h-1zM22 8h1v1h-1zM2 10h1v1h1v-1h5v1h-1v1h2v2h-1v-1h-2v-2h-2v2h-1v-1h-1v1h-1zM22 10h1v1h-1zM24 10h5v1h-2v3h-1v-3h-1v3h-1v1h-2v-1h1v-1h1v-1h-1v-1h1zM11 11h2v2h-1v-1h-1zM21 11h1v1h-1zM30 11h1v1h-1zM17 12h1v1h-1zM20 12h1v1h1v1h-2zM22 12h1v1h-1zM3 13h1v1h-1zM5 13h1v1h3v1h-1v1h1v1h-3v-1h-1zM16 13h1v1h-1zM18 13h1v1h-1zM29 13h1v1h-1zM10 14h1v1h-1zM19 14h1v1h-1zM25 14h1v1h-1zM27 14h2v3h-1v-2h-1zM2 15h2v1h-1v1h-1zM9 15h1v1h-1zM11 15h2v1h-2zM15 15h2v1h1v-1h1v2h-1v2h-2v-1h1v-1h-1v1h-1zM20 15h2v1h-1v1h-1zM24 15h1v1h-1zM26 15h1v3h-1v-1h-1v-1h1zM30 15h1v1h-1zM23 16h1v1h-1zM3 17h2v1h-1v2h-1v3h-1v-5h1zM9 17h1v1h-1zM12 17h2v1h-1v2h1v1h-1v1h1v3h-1v-1h-1v-1h-1v-1h1v-2h-1v1h-3v-1h2v-1h1v-1h1zM21 17h1v1h2v1h-2v1h-1zM29 17h1v1h-1zM6 18h1v2h-1zM8 18h1v1h-1zM14 18h1v2h-1zM19 18h1v1h-1zM25 18h1v1h-1zM28 18h1v3h-2v-1h-1v-1h2zM18 19h1v1h-1zM24 19h1v1h-1zM30 19h1v1h-1zM4 20h2v1h-1v1h-1zM17 20h1v2h2v1h-1v2h-1v1h-1v-1h-1v1h-1v1h-1v1h-2v1h-2v-4h1v1h3v-1h1v-2h2v1h1v-1h-1v-1h-1v-1h1zM19 20h2v2h-1v-1h-1zM23 20h1v1h-1zM7 21h1v1h2v1h-4v-1h1zM25 21h1v1h1v1h1v-1h1v-1h1v1h1v2h-2v1h-2v1h2v1h-5v1h1v3h-2v-1h1v-1h-1v-1h-1v-3h-1v-2h1v-1h3zM10 23h1v1h-1zM23 23v3h3v-3zM2 24h7v7h-7zM11 24h1v1h-1zM24 24h1v1h-1zM3 25v5h5v-5zM20 25h1v1h-1zM4 26h3v3h-3zM16 26h1v1h-1zM19 26h1v1h1v1h1v1h1v1h-2v-1h-1v-1h-1v1h-2v-1h1v-1h1zM15 27h1v1h-1zM29 27h2v1h-1v2h-1zM14 28h1v1h-1zM26 28h2v1h-1v1h2v1h-3zM12 29h1v1h-1zM16 29h1v1h-1zM10 30h2v1h-2zM13 30h3v1h-3zM17 30h1v1h-1zM19 30h1v1h-1z' />
      </svg>
    </Container>
  );
};

export default CodeQR;
