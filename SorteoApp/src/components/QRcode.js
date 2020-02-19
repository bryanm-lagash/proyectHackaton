import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import qr from 'qr-image';

import useMount from '../hooks/useMount';
import useStyles from '../containers/styles';

const CodeQR = props => {
  const { link } = props;
  const classes = useStyles();
  const [qrImage, setQrImage] = useState();

  useMount(async () => {
    const code = qr.imageSync(link, {
      type: 'svg',
      size: 10,
      margin: 2
    });

    setQrImage(code);
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
