import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Drawer from "../Drawer"
import FluidContainer from "../FludContainer";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid"
import { CardContent, CardHeader, Divider } from "@material-ui/core";
import {connect} from 'react-redux'
import EventPanel from "./EventsPanel/EventPanel"
import 'react-calendar/dist/Calendar.css';
import "./Calendar.css"
import {filterEvent} from "../../redux/Actions/EventActions"
class Calender extends Component {
  state = {
    date: new Date(),
    id: new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()
    }
 
  onChange = date =>{ this.setState({ date })
  let eventId= date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()
  this.setState({id: eventId})
  this.props.filterEventsWithDate(eventId)
  
}
  render() {
    return (
        <>
        <Drawer/>
        <FluidContainer>
        <Grid container >
        <Grid item lg={12} xs={12} >
      <Card elevation={2}  >
      <CardHeader style={{display:"flex",alignItems:"center",margin:"auto",width:"min-content"}}
  title="Calendar"
  
/> 
<Divider/>
        <CardContent> 
          
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        </CardContent>

</Card>    
</Grid>
<Grid item sm={12} lg={12}>
<EventPanel   dateId={this.state.id} />
</Grid>
</Grid>
    </FluidContainer>
      </>
    );
  }
}

const  mapDispatchToProps = dispatch=>({
  filterEventsWithDate:(id)=>{dispatch(filterEvent(id))}
})

export default connect(null, mapDispatchToProps)(Calender)