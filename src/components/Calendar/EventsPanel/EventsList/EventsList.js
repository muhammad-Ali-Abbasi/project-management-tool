import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

//css
import "../EventPanel.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "80%",
    marginTop:"4px",
  },
  listItem:{
    border: "1px solid #008b8b"
  }
}));




export default function EventList(props) {
  const classes = useStyles();
 
  return (


  <List className={classes.root}>

                {props.events === null || props.events.length === 0  ?<p>yaaay! no pending work</p>:
                props.events.map((event,inde)=>{
                  return(
                      <ListItem className={classes.listItem} id={event.id}  key={inde}>
                            <ListItemText
                              primary={event.eventname}
                            />
                            

                            <IconButton aria-label="delete" id={event.id}  >
                        <DeleteIcon onClick={props.handeldeleteitem} id={event.id}/>
                      </IconButton> 
                          </ListItem>
                  )
              })}
                </List>
  );
}
