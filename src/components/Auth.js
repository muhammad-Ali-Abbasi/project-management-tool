import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  login: {
      background: 'linear-gradient(45deg, #20B2AA 30%, rgb(9, 147, 189) 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'}
};

function Auth() {
  return (
    <div className="Dashboard">
            <Typography variant="h5" component="h2">
                  Sign In or Sign Up
            </Typography>
            <Button variant="contained" style={style}>
              SignUp
            </Button>
            -
            <Button variant="contained" style={style.login}>
              Login
            </Button>
  </div>
  );
}

export default Auth