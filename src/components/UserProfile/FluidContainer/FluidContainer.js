import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="MuiContainer-root" maxWidth={props.minWidth} maxWidth={props.maxWidth} >
        {props.children}
      </Container>
    </React.Fragment>
  );
}