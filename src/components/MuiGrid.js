import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MuiGrid(props) {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root} spacing={2}>
      {props.children}
      </Grid>
  );
}