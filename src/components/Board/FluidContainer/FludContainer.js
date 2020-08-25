import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
export default function FluidContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{marginTop:"170px",maxWidth:"90%",marginLeft:"auto",marginRight:"auto"}}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
