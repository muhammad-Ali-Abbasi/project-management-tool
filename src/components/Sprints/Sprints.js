import React from 'react';
import Drawer from "../Drawer"
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Container from "./FluidContainer/FluidContainer"
import Card  from '../Card'
import { CardHeader} from '@material-ui/core';
import Table from "./Table/Table"

const useStyles = makeStyles((theme) => ({
  root:{
    width:"80%",
    marginBottom:"16px",
    marginTop:"10.7rem",
    marginLeft:"auto",
    marginRight:"auto"
   
  },
    paper: {
      padding: theme.spacing(2),
      overflow: "auto",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Sprints = (props) => {
    const classes = useStyles();
    return ( 
    <div className={classes.root}>

        <Drawer  />
        <Container>
            <Card elevation={1} >
          <CardHeader
        
        title="Shrimp and Chorizo Paella"
      /> 
        <CardContent> 
            <Table/>
            </CardContent>
          </Card>
        </Container>
        </div>
     );
}
 
export default  Sprints;