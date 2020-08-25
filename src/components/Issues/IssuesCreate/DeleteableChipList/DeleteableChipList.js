import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor:"inherit"
  },
  chip: {
      border: "1px solid #9e9e9e",
      backgroundColor: "transparent",
    margin: theme.spacing(0.5),
  },
}));

export default function DeleteChipList(props) {
  const classes = useStyles();
useEffect(()=>{console.log("i ran")},props.tagsarray)

  const handleDelete = (chipToDelete) => () => {
    chipToDelete.filter((chip) => chip.id !== chipToDelete.id)
  };

  return (
    <ul  className={classes.root}>
      {props.tagsarray.map((data) => {

        return (
          <li key={data.id}>
            <Chip
              label={data.value}
              onDelete={handleDelete(props.tagsarray)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </ul>
  );
}
