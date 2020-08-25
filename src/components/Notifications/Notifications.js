import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Drawer from "../Drawer"
import CheckboxList from "./CheckboxList/checkBoxList"
import Button from '@material-ui/core/Button';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import FastForwardIcon from '@material-ui/icons/FastForward';
import TextField from '@material-ui/core/TextField';
import Editor from "../Editor"
import "./Notifications.css"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:"80%",
      paddingTop:"130px",
      margin:"auto" 
    },
    paper: {
      padding: theme.spacing(2),
      overflow: "auto",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  let getdata = (e) =>{
    const editor = document.getElementById('ec14b784d5873b2e187e9056f17811705').getdata().data
    console.log(editor)
  }

const Notifications = (props) => {
    const classes = useStyles();
    const [textareadisable,settextareadisable]=React.useState(true)
  const [forwardareadisable,setforwardareadisable]=React.useState(true)
    return ( 
        <> <Drawer  />
        <div className={classes.root }>
       <Grid container spacing={3}>
       <Grid item xs={12} sm={12} lg={12} md={12} >
       <CheckboxList forwardareadisable={forwardareadisable} setforwardareadisable={setforwardareadisable} title="Notifications" itemName="Notifications" count={[{value:"New message received"},{value:"Your item shipped"},{value:"New order"},{value:"New message received"}]} >
          <NotificationsActiveIcon/>
        </CheckboxList>
       </Grid>
       </Grid>
       </div>
    <div className="notification-button-group">
    <Button
        variant="contained"
        className="profile-bar-button"
        startIcon={<AddIcon />}
        onClick={()=>settextareadisable(false)}
      >
        Create
      </Button>
      { forwardareadisable === false ?<Button
        variant="contained"
        className="profile-bar-button"
        startIcon={<FastForwardIcon />}
      >
        Forward
      </Button>:null}
    </div>
    { forwardareadisable === false || textareadisable === false ?
    <div className="notification-to">
    <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <label for="notification-to-label"> To: </label>
          </Grid>
          <Grid item>
            <TextField id="notification-to-label" className="notification-to-input" label="Send to" />
          </Grid>
        </Grid>
    </div>:null}
    { textareadisable === false ?<div container className="notification-message-area-group">
      <Paper>
        <Editor />
      </Paper>
        <Button
        onClick={()=>getdata}
        variant="contained"
        className="profile-bar-button"
        startIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>:null}
       </>
    )}
 
export default  Notifications;