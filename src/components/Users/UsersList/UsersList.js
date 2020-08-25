import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//css
import "../Users.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  avatar: {
    marginRight: "1.6rem",
    backgroundSize:"cover",
    width: "3rem",
    height:"3rem",
    borderRadius: "50%",
    backgroundRepaet:"no-repeat"
  }
}));




export default function InteractiveList(props) {
  const classes = useStyles();
 

  const item = props.users.map((user,inde)=>{
    return(
        <ListItem  key={inde}>
              <div alt="Cindy Baker" className={classes.avatar} style={{backgroundImage:`url(/assets/img/${user.avatar}.jpg)`}}></div>
              <ListItemText
                primary={user.username}
              />
              

              <ListItemSecondaryAction style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"20%"}}>
                
              <IconButton aria-label="delete" onClick={props.handledelete} id={user.id} >
          <DeleteIcon />
        </IconButton> 
                
                {!user.active ? user.time:<span className="active-label"></span>}
              </ListItemSecondaryAction>
            </ListItem>
    )
})
  return (

  <List className={classes.root}>
                {item}
                </List>
  );
}
