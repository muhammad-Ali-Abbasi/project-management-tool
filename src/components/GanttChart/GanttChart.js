import React from "react";
import Drawer from "../Drawer";
import FluidContainer from "../FludContainer";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid"
import Gantt from "./Gantt/Gantt"
import Toolbar from "./Toolbar/Toolbar"
import { CardContent, CardHeader, Divider } from "@material-ui/core";
import "./GanttChart.css"

const data = {
  data: [
      { id: 1, text: 'Task #1', start_date: '2019-4-5', duration: 9, progress: 0.6 },
      { id: 2, text: 'Task #2', start_date: '2020-18-04', duration: 9, progress: 0.4 },
      { id: 3, text: 'Task #3', start_date: '2021-18-04', duration: 9, progress: 3.0 },
      { id: 4, text: 'Task #4', start_date: '2022-18-04', duration: 9, progress: 3.0 }
  ],
  links: [
      { id: 1, source: 1, target: 2, type: '0' }
  ]
};

class GanttChart extends React.Component {
  state = {
    currentZoom: 'Days'
};

handleZoomChange = (zoom) => {
    this.setState({
        currentZoom: zoom
    });
}
  render() {
    const { currentZoom } = this.state;
    return (
        <>
        <Drawer/>
      <FluidContainer>
        <Grid container >
        <Grid item lg={12} xs={12} >
      <Card elevation={2}  >
      <CardHeader style={{display:"flex",alignItems:"center",margin:"auto",width:"min-content"}}
  title="Progress"
  
/> 
<Divider/>
        <CardContent > 
       
        <div>
                <div className="zoom-bar">
                    <Toolbar
                        zoom={currentZoom}
                        onZoomChange={this.handleZoomChange}
                    />
                </div>
                <div className="gantt-container">
                    <Gantt
                        tasks={data}
                        zoom={currentZoom}
                    />
                </div>
            </div>
       
  </CardContent>

  </Card> 
</Grid>
  </Grid>
      </FluidContainer>
      </>
    );
  }
}
export default GanttChart