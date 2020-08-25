import React from 'react';
import Drawer from "../Drawer"
import Container from "../FludContainer"
import { makeStyles } from '@material-ui/core/styles';
import AreaChart from "./AreaChart/AreaChart"
import Card  from '../Notifications/Card/Card'
import { CardHeader} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:"80%",
      paddingTop:"130px",
      margin:"auto" 
    },
    
  }));
const Velocity = (props) => {
    const classes = useStyles();
    return ( 
        <>
        <Container>
        <Card>
          <CardHeader
        title="Velocity"
      /> 
        <CardContent> 
        <AreaChart/>
        </CardContent>
          </Card>
            
        </Container>
        <Drawer  />
        </>
     );
}
 
export default Velocity;