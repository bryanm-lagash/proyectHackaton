import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import qr from 'qr-image';
import { useSelector } from 'react-redux';

import { INSCRIPCION } from '../routes/paths';
import useMount from '../hooks/useMount';
import useStyles from '../containers/styles';

const CodeQR = props => {
  const { id } = props;
  const classes = useStyles();
  const [qrImage, setQrImage] = useState();
  // const { idSorteo } = useSelector(({ sorteo }) => sorteo);

  useMount(async () => {
    const code = qr.imageSync(`http://10.10.11.60:3000${INSCRIPCION}${id}`, {
      type: 'svg',
      size: 10,
      margin: 2
    });

    setQrImage(code);
    // if (path) {
    //   const code = qr.imageSync(http://10.10.11.53:3000${path}, {
    //     type: 'svg',
    //     size: 10,
    //     margin: 2
    //   });

    //   setQrImage(code);
    // }
    // const code = qr.imageSync(http://10.10.11.53${path}/${id}, {
  });

  return (
    <Container
      style={{ textAlign: 'center' }}
      className={classes.container}
      maxWidth={false}
    >
      <span dangerouslySetInnerHTML={{ __html: qrImage }} />
    </Container>
  );
};

export default CodeQR;
