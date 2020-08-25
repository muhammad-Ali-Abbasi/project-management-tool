import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant={props.variant}>
      {props.children}
    </Card>
  );
}
