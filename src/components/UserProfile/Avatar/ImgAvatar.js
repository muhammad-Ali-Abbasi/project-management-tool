import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    top: "-60px",
    left: "24px",
    position: "absolute",
    },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/assets/img/profile.jpg" className={classes.large} />
    </div>
  );
}
