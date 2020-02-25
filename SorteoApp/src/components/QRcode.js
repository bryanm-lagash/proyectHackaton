import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import qr from 'qr-image';

import useMount from '../hooks/useMount';
import useStyles from '../containers/styles';

const CodeQR = props => {
  const { path, id } = props;
  const classes = useStyles();
  const [qrImage, setQrImage] = useState();
  // const { idSorteo } = useSelector(({ sorteo }) => sorteo);

  useMount(async () => {
    if ((path && id === undefined) || id === '') {
      const code = qr.imageSync(`http://10.10.11.53:3000${path}`, {
        type: 'svg',
        size: 9,
        margin: 1
      });

      setQrImage(code);
    }

    if (path && id) {
      const code = qr.imageSync(`http://10.10.11.53:3000${path}${id}`, {
        type: 'svg',
        size: 9,
        margin: 1
      });

      setQrImage(code);
    }
  });

  // if (window.screen.width <= 418) {
  //   const code = qr.imageSync(`http://10.10.11.53:3000${path}${id}`, {
  //     type: 'svg',
  //     size: 8,
  //     margin: 2
  //   });

  //   setQrImage(code);
  // }

  return (
    <Container
      style={{ textAlign: 'center' }}
      className={classes.container}
      maxWidth={false}
    >
      <span className='QRCode' dangerouslySetInnerHTML={{ __html: qrImage }} />
      <hr />
    </Container>
  );
};

export default CodeQR;
