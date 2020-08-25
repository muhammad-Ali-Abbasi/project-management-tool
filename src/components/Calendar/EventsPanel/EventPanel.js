import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Drawer from "../../Drawer"
import EventsList from "./EventsList/EventsList"
import AddCircle from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, IconButton, Button} from '@material-ui/core';
import Card  from "../../Card"
import {connect} from "react-redux"
import {addEvent,filterEvent,deleteEvent} from "../../../redux/Actions/EventActions"

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
const ActiveSprintsList = (props) => {
    const classes = useStyles();
    
    let [event,setEvent]= useState({ 
      id: props.dateId,
       eventname: null})
    const onEventChanges=(e)=>{
     setEvent({ 
       id: props.dateId,
        eventName: e.target.value})
    }
  
    const handeldeleteitem = (event)=>{
        const deleteItemId = event.target.parentNode.id
       props.deleteEvent(deleteItemId)
       props.filterEventsWithDate(props.dateId)
    }
    const custom=()=>{
      props.addNewEvent(event) 
      props.filterEventsWithDate(props.dateId)
    }
    return ( 
        <> <Drawer setdarkMode={props.setdarkMode} darkmodehandler={props.darkmodehandler} darkMode={props.darkMode}/>
        <div className={classes.root }>
       <Grid container spacing={3}>
       <Grid item xs={12} sm={12} lg={12} md={12} >
       <Card>
    <CardHeader style={{display:"flex",alignItems:"center"}}
  title="Events"
  action={
    <IconButton  >
      <AddCircle/>
    </IconButton>
  }
/> 
<Divider/>
{<div style={{display:"flex",alignItems:"baseline",justifyContent:"flex-start",margin:"1rem"}}>
<TextField 
       style={{flexGrow:"1"}}
        id="eventname"
        onChange={onEventChanges}
        label="eventname"
        variant="outlined"
      />
      <Button  style={{marginLeft:"1rem"}} variant="contained" onClick={custom} color="inherit">ADD</Button>
      </div>}
  <CardContent> 
          <EventsList handeldeleteitem={handeldeleteitem} events={props.filterEvents}/>
      </CardContent>
      </Card>
       </Grid>
       </Grid>
       </div>
       </>
    )}
 
const mapStateToProps=state=>({
  filterEvents: state.Events.filteredEvents
})

const mapDispatchToProp = dispatch=>({
  addNewEvent: (Newevent)=>{dispatch(addEvent(Newevent))},
  filterEventsWithDate:(id)=>{dispatch(filterEvent(id))},
  deleteEvent:(id)=>{dispatch(deleteEvent(id))},
})

export default connect(mapStateToProps,mapDispatchToProp)(ActiveSprintsList);