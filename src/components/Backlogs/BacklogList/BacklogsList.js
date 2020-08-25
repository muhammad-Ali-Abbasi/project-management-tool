import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Drawer from "../../Drawer"
import CheckboxList from "./CheckboxList/checkBoxList"
import {deleteBacklog} from "../../../redux/Actions/BacklogsActions"
import {connect} from "react-redux"

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

  
const BacklogssList = (props) => {
    const classes = useStyles();
    console.log(props.backlogs)
    return ( 
        <> <Drawer  />
         <div className={classes.root }>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12} md={12} >
        <CheckboxList title="Backlogs" itemName="Fix front end log" count={props.backlogs} deletebacklog={props.deleteBacklog} />
        </Grid>
        </Grid>
        </div>
        </>

        
     );
}
 const mapStateToProps = state=>({
   backlogs: state.backlogs.currentbacklogs
 })
 const mapDispatchToProps = dispatch =>({
  deleteBacklog: BacklogId=>dispatch(deleteBacklog(BacklogId))
})
export default connect(mapStateToProps,mapDispatchToProps)(BacklogssList);